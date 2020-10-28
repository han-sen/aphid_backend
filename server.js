// <- DEPENDENCIES ================================ ->

const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;

// <- DATA ======================================== ->

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
});
db.on("open", () => {
    console.log("* __Connection Open__ *");
});

// <- MIDDLEWARE ================================== ->

app.use(express.urlencoded({ extended: false })); //req.body
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(methodOverride("_method"));

app.listen(PORT, () => {
    console.log(`listening on port:${PORT}`);
});
