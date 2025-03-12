// getDates.js

// Function to update the current year in the footer
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// Function to update the last modified date
function updateLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Modified: ${lastModified}`;
}

// Execute functions on page load
updateCurrentYear();
updateLastModified();

