const express = require("express");
const router = express.Router();
const bugSeed = require("../models/bugSeed.js");
const Bug = require("../models/bug.js");

router.get("/seed", (req, res) => {
    Bug.deleteMany({}, () => {});
    Bug.insertMany(bugSeed, (error, data) => {
        error ? res.status(400).json(error) : res.json(data);
    });
});

// show all bugs in db
router.get("/bugs", (req, res) => {
    Bug.find({}, (error, allBugs) => {
        error ? res.status(404).json(error) : res.status(200).json(allBugs);
    });
});

// delete a bug
router.delete("/bugs/:id", (req, res) => {
    // Delete document from collection
    Bug.findByIdAndRemove(req.params.id, (error, deletedBug) => {
        error ? res.status(404).json(error) : res.status(200).json(deletedBug);
    });
});

// show all bugs for user
router.get("/bugs/:userId", (req, res) => {
    Bug.find({ userId: req.params.userId }, (error, allBugs) => {
        error
            ? res.status(404).json({ error: error, message: req.body })
            : res.status(200).json(allBugs);
    });
});

// create a new bug
router.post("/bugs", (req, res) => {
    Bug.create(req.body.newBug, (error, newBug) => {
        error ? res.status(400).json(error) : res.json({ newBug: newBug });
    });
});

router.get("/bugs/:id", (req, res) => {
    // Find the specific bug
    Bug.findById(req.params.id, (error, foundBug) => {
        error ? res.status(404).json(error) : res.status(200).json(foundBug);
    });
});

// UPDATE
router.put("/bugs/:id", (req, res) => {
    Bug.findByIdAndUpdate(
        req.params.id,
        req.body.editedBug,
        { new: true },
        (error, updatedBug) => {
            error ? res.send(error.message) : res.json(updatedBug);
        }
    );
});

router.get("/", (req, res) => {
    res.json({ message: "hit api route" });
});

module.exports = router;
