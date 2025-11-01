const fs = require("fs");
const dataFile = "notes.json";

const addNote = function (title, body) {
  /* load notes 
    [
      { title: "title 1", body: "body 1" },
      { title: "title 2", body: "body 2" },
    ];
   */
  const notes = loadNote();

  // stores duplicate titles
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  // no duplicate titles so save data on file
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });

    saveNote(notes);
    console.log("New note added");
  } else {
    console.log("Note title is taken!");
  }
};

const removeNote = function (title) {
  const notes = loadNote();

  // filters out the object with provided title
  const newNotes = notes.filter(function (note) {
    return note.title !== title;
  });

  if (newNotes.length === notes.length) {
    console.log("No notes found with title: " + title);
  } else {
    console.log(title + " note deleted!");
    saveNote(newNotes);
  }
};

const loadNote = function () {
  try {
    const dataBuffer = fs.readFileSync(dataFile);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};

const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync(dataFile, dataJSON);
};

// function readNote(title) {}

// function removeNote(title) {}

// function listNotes() {}

module.exports = { addNote: addNote, removeNote: removeNote };
