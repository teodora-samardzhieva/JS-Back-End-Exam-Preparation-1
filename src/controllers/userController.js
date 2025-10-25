import { Router } from "express";
import { userService } from "../services/index.js";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('users/register')
    // create new folder users in src/views
    // move register.html and login.html into src/views/users
    // rename register.html to register.hbs
});

// Create post route for register
userController.post('/register', async (req, res) => {
    // console.log(req.body);

    const {email, password} = req.body;
    // create userService
    const result = await userService.register(email, password);

    // res.end();
    res.redirect('/users/login');
});

export default userController;