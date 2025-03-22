// main.js

// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuToggle.textContent = mainNav.classList.contains('open') ? '✖' : '☰';
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const mainContent = document.getElementById('main-content');

darkModeToggle.addEventListener('click', () => {
    mainContent.classList.toggle('dark-mode');
    darkModeToggle.textContent = mainContent.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', mainContent.classList.contains('dark-mode'));
});

// Load Dark Mode Preference
if (localStorage.getItem('darkMode') === 'true') {
    mainContent.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

// Update Current Year
function updateCurrentYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
}

// Update Last Modified Date
function updateLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').querySelector('span').textContent = lastModified;
}

// Weather Placeholder
function updateWeather() {
    document.getElementById('weather').textContent = 'Sunny, 32°C (Abuja, Nigeria)';
}

// Visit Counter
function updateVisits() {
    const visitsSpan = document.getElementById('visits');
    let visits = localStorage.getItem('pageVisits') || 0;
    visits = parseInt(visits) + 1;
    localStorage.setItem('pageVisits', visits);
    visitsSpan.textContent = visits;
}

// Execute on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentYear();
    updateLastModified();
    updateWeather();
    updateVisits();
});

