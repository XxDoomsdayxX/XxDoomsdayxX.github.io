const navToggle = document.getElementById('nav-toggle');
const siteNav = document.getElementById('site-nav');
const overlay = document.getElementById('overlay');
const navLinks = document.querySelectorAll('#site-nav a');

document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "Software Engineer",
        "Full Stack Developer",
        "Creative Problem Solver",
        "Visionary"
    ];

    const el = document.getElementById('typewriter');
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let currentPhrase = phrases[phraseIndex];

    function type() {
        if (isDeleting) {
            charIndex--;
            el.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                currentPhrase = phrases[phraseIndex];
                setTimeout(type, 500);
            } else {
                setTimeout(type, 50);
            }
        } else {
            charIndex++;
            el.textContent = currentPhrase.substring(0, charIndex);
            if (charIndex === currentPhrase.length) {
                setTimeout(() => { isDeleting = true; type(); }, 1500);
            } else {
                setTimeout(type, 100);
            }
        }
    }

    type();
});

function openMenu() {
    siteNav.classList.add('open');
    overlay.classList.add('show');
    navToggle.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    siteNav.classList.remove('open');
    overlay.classList.remove('show');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
}

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
});

navToggle.addEventListener('click', () => {
    if (siteNav.classList.contains('open')) {
        closeMenu();
    } else {
        openMenu();
    }
});

overlay.addEventListener('click', closeMenu);

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.getElementById('year').textContent = new Date().getFullYear();
