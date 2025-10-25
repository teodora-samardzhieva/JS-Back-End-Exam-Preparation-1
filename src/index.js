import express from 'express';
import handlebars from 'express-handlebars';

import routes from './routes.js';

const app = express();

// Config handlebars engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs', // config handlebars file extension
}));
app.set('view engine', 'hbs'); // use handlebars engine

// Add static middleware
app.use(express.static('src/public'));

// Add body parser
app.use(express.urlencoded({ extended: false })); // parse data from html forms

// Add json parser
// app.use(express.json());

// Add routes
app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000... '));