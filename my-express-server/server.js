const express = require("express");
const app = express();

app.get("/", function(request, response) {
  response.send("<h1>Hello</h1>");
});

app.get("/contact", function(req, res) {
  res.send("Contact me at: yairayalon18@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("<h1>THis page belongs to Yair</h1><br><p>Welcome to server-side proframming</p>");
});

app.get("/hobbies", function(req, res) {
  res.send("riding bike");
});

app.get("/food", function(req, res) {
  res.send("potatoes");
});

app.listen(3000, function() {
  console.log("Server started on port 3000" );
});
