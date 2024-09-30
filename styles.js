const noteList = document.getElementById('note-list');
const addNoteButton = document.getElementById('add-note');
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
    const noteElement = event.target.parentNode;
    noteList.removeChild(noteElement);
}



// storng the user notes
// Store user input
const userInput = document.getElementById('floatingTextarea');

// Store data on page unload
window.onunload = function() {
  localStorage.setItem('floatingTextarea',floatingTextarea .value);
};

// Retrieve stored data on page load
window.onload = function() {
  const storedInput = localStorage.getItem('floatingTextarea');
  if (storedInput) {
    floatingTextarea.value = storedInput;
  }
};

// storng the user notes
// Store user input
const title = document.getElementById('title');

// Store data on page unload
window.onunload = function() {
  localStorage.setItem('title',title .value);
};

// Retrieve stored data on page load
window.onload = function() {
  const storedInput = localStorage.getItem('title');
  if (storedInput) {
    title .value = storedInput;
  }
};



//Refreshing page after user clicks on the new note button

// Get the button element
const refreshButton = document.getElementById('refresh-button');

// Add event listener
refreshButton.addEventListener('click', function() {
  // Clear input fields
  const inputs = document.querySelectorAll('input, textarea');
  inputs.forEach(input => input.value = '');

  // Refresh the page
  window.location.reload();
});


jQuery

$('#refresh-button').click(function() {
  // Clear input fields
  $('input, textarea').val('');

  // Refresh the page
  window.location.reload();
});



function clearFields() {
    const inputs = document.querySelectorAll('input, textarea');
    inputs.forEach(input => input.value = '');
    window.location.reload();
  }
  