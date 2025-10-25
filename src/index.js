import express from 'express';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';

import routes from './routes.js';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './middlewares/authMiddleware.js';

const app = express();

// Setup / connect to database
try {
    await mongoose.connect('mongodb://localhost:27017', {
        dbName: 'friendly-world',
    });
    
    console.log('Database connected successfully!');
} catch (err) { // Add error handling on connect
    console.log('Cannot connect to database: ', err.message)
}

// 1. Config handlebars engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs', // 3. config handlebars file extension
    runtimeOptions: { 
        allowProtoPropertiesByDefault: true, 
        allowProtoMethodsByDefault: true 
    }
}));
app.set('view engine', 'hbs'); // 2. use handlebars engine
app.set('views', 'src/views'); // 4. set views folder

// Add static middleware
app.use(express.static('src/public'));

// Add cookie-parser
app.use(cookieParser());

// Add body parser
app.use(express.urlencoded({ extended: false })); // parse data from html forms

// Add json parser
// app.use(express.json());

// Use auth middleware
app.use(authMiddleware);

// Add routes
app.use(routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000... '));