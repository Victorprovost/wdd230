// Declare URL and cards element
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Async function to fetch prophet data
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets); // Temporary console check
    displayProphets(data.prophets);
}

// Function to display prophets
const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // Populate heading with full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // Populate image attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '200');
        portrait.setAttribute('height', '300');

        // Append elements to card
        card.appendChild(fullName);
        card.appendChild(portrait);

        // Append card to cards div
        cards.appendChild(card);
    });
};

// Call the fetch function
getProphetData();