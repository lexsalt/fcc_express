let express = require('express');
let app = express();
require("dotenv").config()
console.log(process.env.MESSAGE_STYLE)

console.log('Hello World')

// app.get("/", function(req, res) {
//     res.send("Hello World");
//   });

//app.use(express.static(__dirname + "/public"));
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// app.get("/", function(req, res) {
//   res.sendFile(__dirname + "/views/index.html");
// });

app.get("/json", function(req, res) {
  res.json({ message: 'Hello json'});
});

// arrow function
// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json"
//   });
// });































module.exports = app;


































 module.exports = app;
