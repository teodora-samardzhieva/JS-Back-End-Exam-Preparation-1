import express from 'express';
import homeController from './controllers/homeController.js';

const app = express();

// Add static middleware
app.use(express.static('src/public'));

// Add body parser
app.use(express.urlencoded({ extended: false }));

app.use(homeController);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000... '));