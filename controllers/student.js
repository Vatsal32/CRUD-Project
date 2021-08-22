const studentModel = require('../models/student');

module.exports = {
    getAll: function (req, res, next) {
        let studentList = [];
        studentModel.find({}, function(err, students) {
            if (err) {
                next(err);
            } else {
                for (let student of students) {
                    studentList.push({id: student._id, firstName: student.firstName, lastName: student.lastName, age: student.age, college: student.college, batch: student.batch});
                }
                res.json({status: "success", message: "Listing Found!!", data: {students: studentList}});
            }
        });
    },
    create: function (req, res, next) {
        studentModel.create({firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age, college: req.body.college, batch: req.body.batch}, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Student added. ", data: {student: null}});
            }
        });
    }, 
    getById: function (req, res, next) {
        studentModel.findById(req.params.id, function(err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Student found. ", data: {student: result}});
            }
        });
    }, 
    updateById: function (req, res, next) {
        studentModel.findByIdAndUpdate(req.params.id, {firstName: req.body.firstName, lastName: req.body.lastName, age: req.body.age, college: req.body.college, batch: req.body.batch}, function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Student updated. ", data: {student: null}});
            }
        });
    }, 
    deleteById: function (req, res, next) {
        studentModel.findByIdAndRemove(req.params.id , function (err, result) {
            if (err) {
                next(err);
            } else {
                res.json({status: "success", message: "Student deleted. ", data: {student: null}});
            }
        });
    }, 
};