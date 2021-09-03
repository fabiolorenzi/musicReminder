const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { mongoose } = require("./config/db.js");
var songController = require("./controllers/songController.js");

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: "http://localhost:4200"}));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server is running on port ${port}`));

app.use("http://localhost:4200/songs", songController);