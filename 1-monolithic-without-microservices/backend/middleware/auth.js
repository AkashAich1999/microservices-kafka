// This File provides Authentication Middleware for our Express server.
const dummyIsAuthorized = true; // Hard-coded to true (so always allows access right now). In production, we would check a real token or session.
const dummyUserId = "123456";   // A mock user id; in a real app, we would extract this from a token/session.

export const authMiddleware = (req, res, next) => {
    if(!dummyIsAuthorized) {
        return res.status(403).send("Unauthorized");    // sends a 403 Forbidden response.
    }
    req.userId = dummyUserId;
    next();
};