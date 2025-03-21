const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');
button.addEventListener('click', () => {
    const chapter = input.value.trim();
    if (chapter !== '') {
        const listItem = document.createElement('li');
        const deleteButton = document.createElement('button');
        
        listItem.textContent = chapter;
        deleteButton.textContent = '❌';
        
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
        
        deleteButton.addEventListener('click', () => {
            list.removeChild(listItem);
        });
        
        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});