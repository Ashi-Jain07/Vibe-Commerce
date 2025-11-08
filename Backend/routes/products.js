import { getProducts } from "../controller/productController.js";


export const productRoutes = (app) => {
    app.get('/api/products/', getProducts);
};