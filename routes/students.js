const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');

router.get("/", studentController.getAll);

router.post("/create", studentController.create);

router.get("/:id", studentController.getById);

router.put("/:id", studentController.updateById);

router.delete("/:id", studentController.deleteById);

module.exports = router;