const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');
const navbar = document.querySelector('.navbar');
// Toggle the mobile menu
hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('active'); // Add or remove the 'active' class
});

// Hide the navbar when clicking anywhere outside the navbar
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navbar.style.opacity = '0'; // Hide the navbar by setting opacity to 0
        navbar.style.pointerEvents = 'none'; // Disable interactions
    }
});

// Show the navbar when scrolling
let lastScrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if (window.scrollY < lastScrollY) {
        navbar.style.opacity = '1'; // Show the navbar by setting opacity to 1
        navbar.style.pointerEvents = 'auto'; // Enable interactions
    } else {
        navbar.style.opacity = '0'; // Hide the navbar by setting opacity to 0
        navbar.style.pointerEvents = 'none'; // Disable interactions
    }
    lastScrollY = window.scrollY;
});

// Steam animation using JS
document.querySelectorAll('.book-item').forEach(bookItem => {
    // Create the steam overlay
    const steam = document.createElement('div');
    steam.className = 'steam-effect';
    bookItem.appendChild(steam);

    // Animate the background position
    let pos = 0;
    let direction = 1;
    function animateSteam() {
        pos += direction * 2;
        if (pos >= 400 || pos <= 0) direction *= -1;
        steam.style.backgroundPosition = `${pos}% 0`;
        requestAnimationFrame(animateSteam);
    }
    animateSteam();
});
