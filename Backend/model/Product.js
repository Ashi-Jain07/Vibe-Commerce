import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    imgUrl : {
        type: String
    }
});

const Product = mongoose.model('Product', ProductSchema);
export default Product;