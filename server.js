// <- DEPENDENCIES ================================ ->

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;

// <- DATA ======================================== ->

const mongoURI = process.env.MONGODB_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});
db.on("open", () => {
    console.log("* __Connection Open__ *");
});

// <- MIDDLEWARE ======================================== ->

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //req.body
app.use(methodOverride("_method"));

// <- ROUTES ====================================== ->

const apiController = require("./controllers/apiController.js");
app.use("/api", apiController);

app.listen(PORT, () => {
    console.log(`listening on port:${PORT}`);
});
