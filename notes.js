const fs = require('fs');
const chalk = require("chalk");

const getNotes = function () {
    return 'Your notes...'
}

const addNote = function(title, body){
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function(note){
    return note.title === title;
  });

  if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body
      })
      saveNotes(notes);
      console.log("New note added");
    } else{
        console.log("Title taken");
    }
 
}

const removeNote = function(title){

    const notes = loadNotes();
    const filteredNotes = notes.filter(function(note){
        return note.title !== title;
    });

    if(notes.length > filteredNotes.length){
    saveNotes(filteredNotes);
    console.log(chalk.green.inverse("Note Removed!"));
    } else {
    console.log(chalk.red.inverse("No note found!"));
    }

}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}


const loadNotes = function(){
    try{
        const notesBuffer = fs.readFileSync('notes.json');
        const notesJSON = notesBuffer.toString();
        return JSON.parse(notesJSON);
    } catch(e){
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote:addNote,
    removeNote:removeNote
}