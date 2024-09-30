const noteList = document.getElementById('note-list');
const addNoteButton = document.getElementById('add-task');
const newNoteInput = document.getElementById('floatingTextarea');

//adding event listener for the add note button
addNoteButton.addEventListener('click', addNote);

//declaration of main function
function addNote(){
    const newNote = newNoteInput.value.trim();
    //conditional statements for what should happen if new note is added
    if(newNote){
        const noteElement = document.createElement('div');
        noteElement.className = 'note';
        noteElement.textContent = newNote;
        noteElement.innerHTML += '<span class="delete-button">Delete Note</span>';
        noteList.appendChild(noteElement);

        noteElement.querySelector('.delete-button').addEventListener('click', deleteNote);
    }
}

//function to handle deleting of notes
function deleteNote(event){
    const 
}