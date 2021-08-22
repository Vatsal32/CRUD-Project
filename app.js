const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const users = require('./routes/users');
const students = require('./routes/students');

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/students", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind("MongoDB connection error:"));

app.get('/', (req, res) => {
    res.json({tutorial: "Build a REST API using Node JS. "});
});

app.use('/users/', users);

app.use('/students/', students);

app.listen(port, () => {
    console.log(`Server started on port: ${port}. `);
});
