const express = require("express");
var router = express.Router();
var ObjectId = require("mongoose").Types.ObjectId;

var { Song } = require("../models/Song.js");

router.get("/", (req, res) => {
    Song.find((err, docs) => {
        if (!err) {
            res.send(docs);
        } else {
            console.log("No songs found!");
        };
    });
});

router.get("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(404).send(`Song not found!`);
    };

    Song.findById(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            return ("Song not found!");
        };
    });
});

router.post("/", (req, res) => {
    var song = new Song ({
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        language: req.body.language,
        genre: req.body.genre
    });

    song.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Failed in saving the song!");
        };
    });
});

router.put("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        return res.status(400).send("Song not found for the update!");
    };

    var song = {
        title: req.body.title,
        artist: req.body.artist,
        year: req.body.year,
        language: req.body.language,
        genre: req.body.genre
    };

    Song.findByIdAndUpdate(req.params.id, {$set: song}, {new: true}, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error in updating the song!");
        };
    })
});

router.delete("/:id", (req, res) => {
    if (!ObjectId.isValid(req.params.id)) {
        console.log("Song not found for delete!");
    };

    Song.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log("Error during the deleting!");
        };
    });
});

module.exports = router;