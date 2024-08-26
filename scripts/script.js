document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.dropdown');
    const crossSign = document.querySelector('.cross-sign');
    const navLinks = document.querySelectorAll('.dropdown .nav-links li');

    hamburger.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    crossSign.addEventListener('click', () => {
        dropdown.classList.remove('open');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            setTimeout(() => {
                dropdown.classList.remove('open');
            }, 500);
        });
    });
});