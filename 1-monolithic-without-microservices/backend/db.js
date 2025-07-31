// This File mocks Database and Backend Service Logic for Payment, Order Creation, Email Sending, and Logging.
import { v4 as uuidv4 } from "uuid";

// Simulates Payment Processing with a 3-Seconds Delay, then “success”. (In Reality: Would Integrate with a Payment Provider.)
export const pay = async (cart, userId) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("success");
        }, 3000);
    });

    return promise;
};

// Simulates Creating an Order Record with a UUID as the Order ID.
// 3-Second Delay to Mimic Database/Network Latency.
export const createOrder = async (cart, userId) => {
    const id = uuidv4();

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(id);
        }, 3000);
    });

    return promise;
};

// Simulates Sending a Confirmation Email. Delays 3 Seconds.
export const sendEmail = async (orderId, userId, emailResult) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("success");
      // reject(new Error("Email failed"))
    }, 3000);
  });

  return promise;
};

// Mocks Logging an Analytics Event (e.g., for Business Tracking). 
// Just logs to console after 1 second.
export const logAnalytics = async (data,message) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Analytics log created: ", message);
      resolve("success");
    }, 1000);
  });

  return promise;
};

// pay(cart, userId)
// createOrder(cart, userId)
// sendEmail(orderId, userId, emailResult)
// logAnalytics(data, message)