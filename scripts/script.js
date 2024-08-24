document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.dropdown');
    const crossSign = document.querySelector('.cross-sign');

    hamburger.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });

    crossSign.addEventListener('click', () => {
        dropdown.classList.toggle('open');
    });
});