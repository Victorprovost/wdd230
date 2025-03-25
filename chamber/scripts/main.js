// Last Modified Date
document.getElementById('last-modified').textContent = document.lastModified;

// Hamburger Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('show');
});