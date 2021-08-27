const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const users = require('./routes/users');
const students = require('./routes/students');

app.use(bodyParser.json());

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/students", {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', console.error.bind("MongoDB connection error:"));

app.get('/', (req, res) => {
    res.json({title: "CRUD-Project: Build a REST API using Node JS. "});
});

app.use('/users', users);

app.use('/students', validateUser, students);

function validateUser(req, res, next) {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const data = jwt.verify(token, process.env.JWT_KEY);
        if (!data) {
            throw new Error();
        }
        next();
    } catch (error) {
        res.status(401).send({"error": "Unauthorized Access. "});
    }
}

app.use(function (req, res, next) {
    let err = new Error('Not found. ');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    console.log(err);
    if (err.status === 404) {
        res.status(404).json({message: "Not found. "});
    } else {
        res.status(500).json({message: "Something went wrong :( ! "});
    }
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}. `);
});
