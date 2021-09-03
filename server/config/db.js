const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://fabio-lorenzi:vRf5EatIw5YI1zlX@songs.bpiz2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (err) => {
    if (!err) {
        console.log("MongoDB is connected...");
    } else {
        console.log("Error in DB connection: " + JSON.stringify(err, undefined, 2));
    };
});

module.exports = mongoose;