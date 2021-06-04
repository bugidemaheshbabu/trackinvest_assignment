const express = require("express");

// starting the server on port 3000

// express app
const app = express();

// listen for requests
app.listen(3000);


app.get('/employees', (req, res) => {
    res.send("all employees");
})