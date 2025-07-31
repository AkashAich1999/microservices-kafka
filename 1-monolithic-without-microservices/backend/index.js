import express from "express"
import cors from "cors"
import { createOrder, pay, sendEmail, logAnalytics } from "./db.js";
import { authMiddleware } from "./middleware/auth.js";

const app = express();
const PORT = 8000;

// middleware
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);
app.use(express.json());

app.post("/order", authMiddleware, async (req, res) => {
  const { cart } = req.body;
  const userId = req.userId;

  const paymentResult = await pay(cart, userId);
  await logAnalytics({ cart, userId }, "Payment successful");
  const orderId = await createOrder(cart, userId);
  await logAnalytics({ orderId, userId }, "Order created");
  const emailResult = await sendEmail(orderId, userId);
  await logAnalytics({ orderId, userId, emailResult }, "Email sent");

  return res.json({ orderId, paymentResult, emailResult });
});

// In Express v4, we had to manually handle async errors using try-catch.
/*
   But After Express v5, Rejected Promises are Automatically Caught and Forwarded to Error Handlers 
   Without Requiring Manual try/catch and next(error) Calls.
*/   
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json(err.message);
});

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT}`);
});