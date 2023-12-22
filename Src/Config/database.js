const { log } = require("console");
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://Pavithra:pavisarvesh2203@cluster0.fnefacl.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Mongo db is connected");
})
.catch((error)=>{
    console.log("Mongo db is not connected",error);
});

module.exports = mongoose.connection;