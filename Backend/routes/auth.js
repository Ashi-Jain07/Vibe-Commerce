import { login, register } from "../controller/authController.js";

export const authRoutes = (app) => {
    app.post('/api/auth/register', register);
    app.post('/api/auth/login', login);
}