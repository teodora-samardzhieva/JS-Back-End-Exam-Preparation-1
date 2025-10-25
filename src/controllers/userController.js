import { Router } from "express";
import { userService } from "../services/index.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";
import { getErrorMessage } from "../utils/errorUtils.js";

const userController = Router();

userController.get('/register', isGuest, (req, res) => {
    res.render('users/register')
    // create new folder users in src/views
    // move register.html and login.html into src/views/users
    // rename register.html to register.hbs
});

// Create post route for register
userController.post('/register', isGuest, async (req, res) => {
    // console.log(req.body);

    const {email, password, repeatPassword} = req.body;

    try { // Add error handling for register
        const token = await userService.register(email, password, repeatPassword); // create userService

        res.cookie('auth', token); // auto login on register
        res.redirect('/');
    } catch (err) {
        res.status(400).render('users/register', { 
            error: getErrorMessage(err), 
            user: { email } // Add register form data persistance
        });
    }

    // res.end();
    // res.redirect('/users/login');
});

userController.get('/login', isGuest, (req, res) => {
    res.render('users/login');
});

userController.post('/login', isGuest, async (req, res) => {
    const {email, password} = req.body;
    // console.log(req.body);

    // Call userService from userController
    try {
        const token = await userService.login(email, password);

        // send token as cookie
        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.status(404).render('users/login', {
            error: getErrorMessage(err),
            user: { email },
        })
    }
    
    // res.end();
});

// Add logout action
userController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

export default userController;