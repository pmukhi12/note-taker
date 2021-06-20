// require path
const path = require('path');

const fs = require('fs');

// express makes it easier to set up the server
const express = require("express");

// declaring a variable named app to refer to express
const app = express();

// declaring the PORT number
const PORT  = process.env.PORT || 3000

// require notesJSONFile
const notesJSONFile = require('./db/db.json')

// server-static - tells us where the files we need are. These files will not change. Telling express our front end is in the public folder

app.use(express.static('public'));

// JSON middleware express. = midddleware
app.use(express.json());


// URL encoded middleware
app.use(express.urlencoded({
    extended: true
}))


// get static html files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


// Get API Notes
app.get('/api/notes', (req, res) => {
    res.json(notesJSONFile)
})

// Post API Notes

// Start Listening
app.listen(PORT, () => console.log("Server running on http://localhost:"+ PORT))