import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants.js';

export function authMiddleware(req, res, next) {
    const token = req.cookies['auth'];

    if(!token) { // Allow if guest (no token)
        return next();
    }

    try { // Verify token (clear session if invalid)
        const decodedToken = jwt.verify(token, JWT_SECRET);

        // Attach decoded token to req.user (if token is valid)
        req.user = decodedToken;
        req.isAuthenticated = true;

        next();
    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/users/login');
    }
}