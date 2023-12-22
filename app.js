const express = require("express");
const bodyParser = require("body-parser");
const database = require("./Src/Config/database");
const userRoute = require("./Src/Router/userRouter");
const app = express();

app.use(bodyParser.json());

app.use("/doctor",userRoute);

database.on("open",() => {
    app.listen(3000,() => {
        console.log("server is running on port 3000");
    });
});

database.on("error",() => {
    console.log("getting error while connecting the mongo db",error);
});