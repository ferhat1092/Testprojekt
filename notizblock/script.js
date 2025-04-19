let notesTitles = ['Ba', 'Aufgabe'];
let notes = ['banana', 'rasen mähen'];
let trashNotesTitles = [];
let trashNotes = [];


function init() {
    getFromLocalStorage();
    renderNotes();
}

function renderNotes() {  // show array at the beginning on the first site
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = ''; // previous render delete 
    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);  // templates on a seperater function
    }
}

function renderTrashNotes() {  // render second array at the beginning on the first site
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = ''; // previous render delete 
    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);  // templates on a seperater function
    }
}

function getNoteTemplate(indexNote) {  // templates for the render function
    return `<p>+ title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="noteToTrash(${indexNote})">X</button></p>`; // set the array among each other with a plus, set a button to delete                                                                                    
}

function getTrashNoteTemplate(indexTrashNote) {  // templates for the trash render function
    return `<p>+  title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">XXX</button></p>`; // set the array among each other with a plus, set a button to delete                                                                                   
}

function addNote() {    // expand the notes array with .push() method 
    let noteInputRef = document.getElementById('note_input'); // target the input
    let noteInput = noteInputRef.value; // get the new value that is in the input field
    if (noteInputRef.value !== '') {
    notes.push(noteInput); // set the new value to the array
    }
    setToLocalStorage(); // save new value in local storage
    renderNotes(); // show the new array on the first site
    noteInputRef.value = ''; // delete the value in the input field after saving
}

function noteToTrash(indexNote) { // to delete the target index of the array
    let trashNote = notes.splice(indexNote, 1); // splice() method to delete the target index
    trashNotes.push(trashNote);
    let trashNoteTitle = notesTitles.splice(indexNote, 1); // splice() method to delete the target index
    trashNotesTitles.push(trashNoteTitle);
    renderNotes(); // show the new array after delete 
    renderTrashNotes();
}

function deleteNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
}

function setToLocalStorage() {
    localStorage.setItem('myData', JSON.stringify(notes));
}

function getFromLocalStorage() {
    notes = JSON.parse(localStorage.getItem('myData'));
}