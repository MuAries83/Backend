const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req,res) => {
    //res.send("Que pedo!!!!");
    res.sendFile(path.join(__dirname + "/products.html"));
});

app.listen(8080, () => {
    console.log("Server corriendo en puerto", 8080);
});