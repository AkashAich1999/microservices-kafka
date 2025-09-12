import express from "express"
import cors from "cors"

const app = express();

app.use(cors({
    origin:"http://localhost:3000"
}));

app.use(express.json());

app.post("/payment-service", async (req, res) => {
    const { cart } = req.body
    // Assume that we get the Cookie & Decrypt the User ID.
    const userId = "123"

    // TODO: PAYMENT
    console.log("API Endpoint Hit!");

    // KAFKA


    return res.status(200).send("Payment Successful")
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).send(err.message)
});

app.listen(8000, () => {
    console.log("Payment Service is Running on PORT 8000");
});