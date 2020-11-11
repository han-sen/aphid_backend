const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema for purchase of crypto
const BugSchema = new Schema(
    {
        title: { type: String, required: true },
        project: { type: String, required: true },
        severity: { type: String, required: true },
        blameFile: { type: String, required: false },
        summary: { type: String, required: true },
        readOut: { type: String, required: false },
        status: { type: String, required: true },
    },
    { timestamps: true }
);

//  Create Model from our Schema
const Bug = mongoose.model("Bug", BugSchema);

// Export Purchase Model
module.exports = Bug;
