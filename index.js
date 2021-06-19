// require path
const path = require('path');

const fs = require('fs');

// express makes it easier to set up the server
const express = require("express");

// declaring a variable named app to refer to express
const app = express();

// declaring the PORT number
const PORT  = 3000 || process.env;


// server-static - tells us where the files we need are. These files will not change. Telling express our front end is in the public folder

app.use(express.static('public'));

// JSON middleware express. = midddleware
app.use(express.json());


// URL encoded middleware
app.use(express.urlencoded({
    extended: true
}))

// API Routes (Save/Rewrite and Load)

app.get('/api/notes', (req, res) => {
    console.log("api/notes");
});

// get static html files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


// Get API Notes
app.get('/api/notes', (req, res) => {
    // read the file
    fs.readFileSync('db/db.json','utf-8').then(
        // store everything in the db.json file into a temp variable called parseNotes
        (notes) => {
            let parseNotes;
            try {
                // add the parsed value of the db.json file into the array
                parseNotes = [].concat(JSON.parse(notes));
            } catch (error) {
                parseNotes = [];
            }
            return parseNotes
        }
    ).then(
        (notes) => res.json(notes)
    ).catch(error => res.status(500).json(error))

})

// Post API Notes

// Start Listening
app.listen(PORT, () => console.log("Server running on http://localhost:"+ PORT))