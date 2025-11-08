import Product from "../model/Product.js";

// Returns products and seeds initial items if DB empty
export const getProducts = async (req, res) => {

    try {

        const count = await Product.countDocuments();

        if (count === 0) {

            const items = [
                {
                    name: 'Premium Headphones',
                    price: 2999,
                    description: 'High quality audio',
                    imgUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop'
                },

                {
                    name: 'Smart Watch',
                    description: 'Track your fitness',
                    price: 4999,
                    imgUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop'
                },

                {
                    name: 'Wireless Mouse',
                    description: 'Ergonomic design',
                    price: 999,
                    imgUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=200&h=200&fit=crop'
                },

                {
                    name: 'Laptop Stand',
                    description: 'Adjustable height',
                    price: 1499,
                    imgUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop'
                },

                {
                    name: 'USB-C Hub',
                    description: 'Multiple ports',
                    price: 1999,
                    imgUrl: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=200&h=200&fit=crop'
                },

                {
                    name: 'Desk Lamp',
                    description: 'LED light',
                    price: 799,
                    imgUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=200&h=200&fit=crop'
                },

            ];

            await Product.insertMany(items);

        }

        const products = await Product.find();
        res.json(products);

    } catch (err) {
        res.status(500).json({
            message: 'Server error',
            err: err
        });
    }
};
