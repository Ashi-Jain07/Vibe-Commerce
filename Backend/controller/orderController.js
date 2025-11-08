import Order from '../model/Order.js';
import CartItem from '../model/CartItem.js';


//API for checkout
export const checkout = async (req, res) => {

    try {

        const userId = req.user._id;

        const cartItems = await CartItem.find({ user: userId }).populate('product');
        if (cartItems.length === 0) return res.status(400).json({ message: 'Cart is empty' });

        const items = cartItems.map(ci => ({ product: ci.product._id, qty: ci.qty, price: ci.product.price }));
        const total = items.reduce((s, it) => s + it.qty * it.price, 0);

        const order = new Order({ user: userId, items, total });
        await order.save();

        // clear cart
        await CartItem.deleteMany({ user: userId });

        res.json({
            receipt: {
                total: order.total,
                timestamp: order.createdAt,
                id: order._id
            }
        }
        );

    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            err: err
        });
    }
};


//API to fetch all order
export const getOrders = async (req, res) => {

    try {
        const orders = await Order.find({ user: req.user._id }).populate('items.product');
        res.json(orders);

    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            err: err
        });
    }
};
