import { Router } from "express";

const errorController = Router();

errorController.all('/*path', (req, res) => {
    // res.send('Not Found');
    res.render('404'); //  Add not found page 
});

export default errorController;