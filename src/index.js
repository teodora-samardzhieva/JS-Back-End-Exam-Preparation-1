import express from 'express';

const app = express();

// Add static middleware
app.use(express.static('src/public'));

app.get('/', (req, res) => {
    res.send('It works!');
});

app.listen(5000, () => console.log('Server is listening on http://localhost:5000... '));