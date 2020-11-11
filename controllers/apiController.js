const express = require("express");
const router = express.Router();
const bugSeed = require("../models/bugSeed.js");
const Bug = require("../models/bug.js");

// SEED DB
router.get("/seed", (req, res) => {
    Bug.deleteMany({}, () => {});
    Bug.insertMany(bugSeed, (error, data) => {
        error ? res.status(400).json(error) : res.json(data);
    });
});

router.get("/", (req, res) => {
    res.json({ message: "hit api route" });
});

module.exports = router;
