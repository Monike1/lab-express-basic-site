const express = require("express");
const app = express();

app.set("view engine", "hbs");
app.use(express.static(__dirname + "/public"))

app.get("/index", (req, res) => {
  res.render("index", {title:"Home Page"});
})

app.get("/about", (req, res) => {
  res.render("about", {title:"About"});
})

app.get("/gallery", (req, res) => {
  res.render("gallery", {title:"Photo Gallery"});
})

app.listen(3000, () => {
  console.log("listening")
})
