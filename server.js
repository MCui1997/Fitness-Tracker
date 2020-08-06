// Require the necesarry dependencies
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const db = require("./models");

// Get the correct PORT
const PORT = process.env.PORT || 3000;

const app = express();

// Use express app
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Get the routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);


// Connect mongo to apropriate url. (the env is very important for heroku and otherwise use local host)
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


// Listen on PORT
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});