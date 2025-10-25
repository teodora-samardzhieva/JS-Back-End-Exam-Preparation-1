import { Router } from "express";
import { userService } from "../services/index.js";
import { isAuth, isGuest } from "../middlewares/authMiddleware.js";

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

    const {email, password} = req.body;
    // create userService
    const token = await userService.register(email, password);

    res.cookie('auth', token); // auto login on register
    // res.end();
    // res.redirect('/users/login');
    res.redirect('/');
});

userController.get('/login', isGuest, (req, res) => {
    res.render('users/login');
});

userController.post('/login', isGuest, async (req, res) => {
    const {email, password} = req.body;
    // console.log(req.body);

    // Call userService from userController
    const token = await userService.login(email, password);

    // send token as cookie
    res.cookie('auth', token);

    // res.end();
    res.redirect('/');
});

// Add logout action
userController.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
})

export default userController;