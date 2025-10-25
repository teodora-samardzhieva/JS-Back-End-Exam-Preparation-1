import { Router } from "express";

const userController = Router();

userController.get('/register', (req, res) => {
    res.render('users/register')
    // create new folder users in src/views
    // move register.html and login.html into src/views/users
    // rename register.html to register.hbs
});

export default userController;