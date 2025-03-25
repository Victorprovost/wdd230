// Declare chaptersArray with getChapterList or empty array as fallback
let chaptersArray = getChapterList() || [];

// Select DOM elements
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');

// Populate initial list from chaptersArray
chaptersArray.forEach(chapter => displayList(chapter));

// Button click event listener
button.addEventListener('click', () => {
    const chapter = input.value.trim();
    
    if (chapter !== '') {
        displayList(chapter);              
        chaptersArray.push(chapter);       
        setChapterList();                  
        input.value = '';                  
        input.focus();                     
    } else {
        input.focus();                     
    }
});

// Function to display a list item
function displayList(item) {
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');
    
    listItem.textContent = item;
    deleteButton.textContent = '❌';
    
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);        
        deleteChapter(item);            
    });
}

// Function to set chapters in localStorage
function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Function to get chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters'));
}

// Function to delete a chapter from array and localStorage
function deleteChapter(chapter) {
    // No need to slice since we're passing the clean item text
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(); // Update localStorage
}