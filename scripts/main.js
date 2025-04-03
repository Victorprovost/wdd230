// Hamburger Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mainNav = document.getElementById('main-nav');

menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    menuToggle.textContent = mainNav.classList.contains('open') ? '✖' : '☰';
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    darkModeToggle.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
    localStorage.setItem('darkMode', body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
}

// Update Current Year
function updateCurrentYear() {
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Update Last Modified Date
function updateLastModified() {
    document.getElementById('lastModified').querySelector('span').textContent = new Date(document.lastModified).toLocaleString();
}

// Weather Placeholder
function updateWeather() {
    document.getElementById('weather').textContent = 'Sunny, 32°C (Abuja, Nigeria)';
}

// Visit Counter
function updateVisits() {
    let visits = parseInt(localStorage.getItem('pageVisits') || '0', 10);
    visits += 1;
    localStorage.setItem('pageVisits', visits);
    document.getElementById('visits').textContent = visits;
}

// Execute on Page Load
document.addEventListener('DOMContentLoaded', () => {
    updateCurrentYear();
    updateLastModified();
    updateWeather();
    updateVisits();
});

// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});

// Last Modified Date
document.getElementById('last-modified').textContent = document.lastModified;

// Form Validation and Rating Display
const form = document.getElementById('userForm');
if (form) {
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('passwordConfirm');
    const passwordError = document.getElementById('passwordError');
    const rating = document.getElementById('rating');
    const ratingValue = document.getElementById('ratingValue');

    // Password Match Validation
    form.addEventListener('submit', (e) => {
        if (password.value !== passwordConfirm.value) {
            e.preventDefault();
            passwordError.textContent = "Passwords do not match. Please try again.";
            passwordError.style.display = "block";
            password.value = "";
            passwordConfirm.value = "";
            password.focus();
        }
    });

    // Rating Display
    rating.addEventListener('input', () => {
        ratingValue.textContent = rating.value;
    });
}