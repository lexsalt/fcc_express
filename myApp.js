let express = require('express');
let app = express();
require("dotenv").config()
//console.log(process.env.MESSAGE_STYLE)

console.log('Hello World')

app.use(function middleware(req, res, next){
  //console.log("I'm a middleware...");
  //var met = req.method
  //var pathing = req.path
  //var ipAddress = req.ip
  console.log(req.method+" "+req.path+" - "+req.ip)
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

app.get('/now', function(req, res, next) {
  req.time = new Date().toString()
  next()
}, function(req,res) {
  res.json({
    time: req.time
  })
} )

app.get("/:word/echo", (req, res) => {
  res.json({
    echo: req.params.word
  });
});


app.get("/name", (req, res) => {
    //res.send('GET request called');
    let firstName = req.query.first
    let lastName = req.query.last
    res.json({
      name: `${firstName} ${lastName}`
    })
})










module.exports = app;