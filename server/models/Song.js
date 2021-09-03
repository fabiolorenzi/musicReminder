const mongoose = require("mongoose");

var Song = mongoose.model("Song", {
    title: {type: String},
    artist: {type: String},
    year: {type: String},
    language: {type: String},
    genre: {type: String}
});

module.exports = { Song };