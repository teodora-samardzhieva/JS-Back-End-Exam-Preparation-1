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

        // Add user data to handlebars context
        res.locals.user = decodedToken;
        res.locals.isAuthenticated = true;

        next();
    } catch (err) {
        res.clearCookie('auth');
        res.redirect('/users/login');
    }
}

// Authorization
// Create isAuth middleware
export function isAuth(req, res, next) {
    if(!req.isAuthenticated) {
        return res.redirect('/users/login');
    }

    next();
}

// Create isGuest middleware
export function isGuest(req, res, next) {
    if(req.isAuthenticated) {
        return res.redirect('/');
    }

    next();
}