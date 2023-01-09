// Import Dependencies
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import JSON Files
const projects = require("./projects.json");
const about = require("./about.json");

// Create App Object
const app = express();

// Set up middleware
app.use(cors());
app.use(express.json());

// Home route for testing app
app.get('/', (req, res) => {
    res.send("Hello World")
})

// route for retrieving projects
app.get('/projects', (rq, res) => {
    // send projects via JSON
    res.json(projects)
})

// route for retreiving about info
app.get('/about', (req, res) => {
    res.json(about)
})

// Declare a Variable for port number
const { PORT = 3300 } = process.env;

// turn on server listener
app.listen(PORT, () => console.log(`listening on port ${PORT}`))