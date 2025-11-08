import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authRoutes } from './routes/auth.js';
import { productRoutes } from './routes/products.js';
import { cartRoutes } from './routes/cart.js';
import { orderRoutes } from './routes/orders.js';
import { connectDB } from './config/dbConfig.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
authRoutes(app);
productRoutes(app);
cartRoutes(app);
orderRoutes(app);

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));