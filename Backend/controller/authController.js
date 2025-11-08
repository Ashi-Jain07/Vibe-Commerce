import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../model/User.js';

export const register = async (req, res) => {

    const { name, email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'Email already exists' });

        const salt = await bcryptjs.genSalt(10);

        const hashPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            name,
            email,
            password: hashPassword
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);

        res.json({
            token,
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email
            }
        });

    } catch (err) {
        res.status(500).json({ message: 'Server error', err: err.message });
    }
};

export const login = async (req, res) => {

    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: 'Invalid email' });

        const match = await bcryptjs.compare(password, user.password);
        if (!match) return res.status(400).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

        res.json({
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (err) {
        res.status(500).json({ message: 'Server error', err: err });
    }
};
