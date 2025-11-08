import { checkout, getOrders } from "../controller/orderController.js";
import { verifyUser } from "../middleware/auth.js";

export const orderRoutes = (app) => {
    app.post('/api/checkout/', verifyUser, checkout);
    app.get('/api/checkout/', verifyUser, getOrders);
}