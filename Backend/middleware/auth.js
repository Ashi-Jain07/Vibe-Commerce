import jwt from 'jsonwebtoken'
import User from '../model/User.js';

export const verifyUser = async function (req, res, next) {

    const authHeader = req.headers['authorization'];

    const token = authHeader?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'No token provided' });

    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findById(decoded.id).select('-password');

        if (!user) return res.status(401).json({ message: 'Invalid token' });

        req.user = user;
        next();

    } catch (err) {
        return res.status(401).json({
            message: 'Invalid token',
            err: err
        });
    }
};
