// require notesJSONFile
const notesJSONFile = require('./db.json');

// Store the notes

class Store {
    read() {return notesJSONFile};
    addNoteToTheStore(note) {
        notesJSONFile.push(note);
        const indexofNote = notesJSONFile.length - 1
        return indexofNote
    }
}

module.exports = new Store();