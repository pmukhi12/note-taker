// require notesJSONFile
const notesJSONFile = require('./db.json');
const {writeFileSync} = require('fs');
const path = require('path');

// Store the notes

class Store {
    read() {return notesJSONFile};
    addNoteToTheStore(note) {
        notesJSONFile.push(note);
        const indexofNote = notesJSONFile.length - 1
        writeFileSync(path.join(__dirname, "db.json"), JSON.stringify(notesJSONFile))
        return indexofNote
    }
}

module.exports = new Store();