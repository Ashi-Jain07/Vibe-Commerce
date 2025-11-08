import mongoose from 'mongoose';

const CartItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    qty: {
        type: Number, default: 1
    }
}, {
    timestamps: true
}
);

const CartItem = mongoose.model('CartItem', CartItemSchema);
export default CartItem;