const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());

// Serve frontend
app.use(express.static(path.join(__dirname, "public")));

// API routes
app.use("/issues", require("./routes/issueRoutes"));

module.exports = app;
