import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    // TEST Authentication:
    // console.log(req.user);


    // res.send('It works!');
    // res.render('home', {layout: false}); // Render home view without layout 
    res.render('home'); // Render home view with layout (after we have created layouts/main.hbs in src/views)
});

// homeController.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('It works!');
// })


export default homeController;