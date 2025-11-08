import CartItem from '../model/CartItem.js';
import Product from '../model/Product.js';


//API to get all cart items
export const getCart = async (req, res) => {

    try {

        const items = await CartItem.find({ user: req.user._id }).populate('product');

        const total = items.reduce((sum, it) => sum + (it.product.price * it.qty), 0);

        res.json({ items, total });

    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            err: err
        });
    }


};


//API to add item into cart
export const addToCart = async (req, res) => {

    const { productId, qty } = req.body;

    try {

        const product = await Product.findById(productId);
        if (!product) return res.status(404).json({ message: 'Product not found' });

        let item = await CartItem.findOne({ user: req.user._id, product: productId });

        if (item) {

            item.qty = item.qty + (qty || 1);
            await item.save();

        } else {

            item = new CartItem({
                user: req.user._id,
                product: productId,
                qty: qty || 1
            });

            await item.save();
        }

        const populated = await item.populate('product');

        res.json(populated);

    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            err: err
        });
    }
};


//API to update cart item
export const updateCartItem = async (req, res) => {

    const { id } = req.params;
    const { qty } = req.body;

    try {

        const item = await CartItem.findOne({ _id: id, user: req.user._id });
        if (!item) return res.status(404).json({ message: 'Item not found' });

        item.qty = qty;
        await item.save();

        res.json(item);

    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            err: err
        });
    }
};


//API to remove item from cart
export const removeFromCart = async (req, res) => {

    const { id } = req.params;

    try {

        await CartItem.deleteOne({ _id: id, user: req.user._id });

        res.json({ message: 'Removed' });

    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            err: err
        });
    }
};