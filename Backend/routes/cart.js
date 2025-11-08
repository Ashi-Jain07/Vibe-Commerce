import { addToCart, getCart, removeFromCart, updateCartItem } from '../controller/cartController.js';
import { verifyUser } from '../middleware/auth.js';

export const cartRoutes = (app) => {
    app.get('/api/cart/', verifyUser, getCart);
    app.post('/api/cart/', verifyUser, addToCart);
    app.put('/api/cart/:id', verifyUser, updateCartItem);
    app.delete('/api/cart/:id', verifyUser, removeFromCart);
};