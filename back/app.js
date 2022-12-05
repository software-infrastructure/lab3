const express = require('express');
const app = express();
const mongoose = require('mongoose');
const productsRouter = require('./routes/ProductRoutes');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect(
    process.env.MONGODB_CONNECTION ??
        'mongodb://someuser:somepwd@localhost:1111/main',
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Connected to MongoDB');
        }
    }
);

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.use('/api/products', productsRouter);

module.exports = app;
