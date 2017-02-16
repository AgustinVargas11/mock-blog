const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/posts', require('./routes/postRouter'));

mongoose.connect('mongodb://localhost:27017/blog', () => {
    console.log(`Connected to mongo`);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});