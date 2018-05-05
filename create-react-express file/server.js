// //Root of Server

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");

const routes = require("./routes")


const PORT = process.env.PORT || 3001;

// //View engine setup
// app.engine("handlebars", exphs());
// app.set("view engine", "handlebars");

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//let express know static folder
app.use("/public", express.static(path.join(__dirname, "public")));

app.use(routes);

app.listen(PORT, function(){
    console.log('Server started on Port '+PORT)
});
