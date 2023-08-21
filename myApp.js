let express = require('express');
let app = express();
require("dotenv").config()
//console.log(process.env.MESSAGE_STYLE)

console.log('Hello World')

app.use(function middleware(req, res, next){
  //console.log("I'm a middleware...");
  var met = req.method
  var pathing = req.path
  var ipAddress = req.ip
  console.log(met+" "+pathing+" - "+ ipAddress)
  next();
})

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
  var temp = "Hello Json"
  //console.log(temp.toUpperCase())
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json ({
      message: temp.toUpperCase()
    })
    //console.log(temp.toUpperCase())
  } else if (process.env.MESSAGE_STYLE !== "uppercase") {
    res.json({ message: 'Hello json'});
  }
});




// arrow function
// app.get("/json", (req, res) => {
//   res.json({
//     message: "Hello json"
//   });
// });









module.exports = app;