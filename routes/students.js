const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({route: "Get All Students. "});
});

router.post("/create", (req, res) => {
    res.json({route: "Add Student. "});
});

router.get("/:id/", (req, res) => {
    res.json({route: "Get Students. "});
});

router.put("/:id/", (req, res) => {
    res.json({route: "Update Student. "});
});

router.delete("/:id/", (req, res) => {
    res.json({route: "Delete a Student record. "});
})

module.exports = router;