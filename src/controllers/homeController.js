import { Router } from "express";

const homeController = Router();

homeController.get('/', (req, res) => {
    // res.send('It works!');
    res.render('home', {layout: false}); // Render home view without layout
});

// homeController.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('It works!');
// })


export default homeController;