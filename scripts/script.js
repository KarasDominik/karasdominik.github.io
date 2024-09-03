document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger-menu');
    const dropdown = document.querySelector('.dropdown');
    const crossSign = document.querySelector('.cross-sign');
    const navLinks = document.querySelectorAll('.dropdown .nav-links li');
    const scrollButton = document.querySelector('.bi-chevron-up');
    const rsvpForm = document.querySelector('form');

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

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    })

    rsvpForm.reset();
});

window.onscroll = function() {
    const scrollButton = document.querySelector(".bi-chevron-up");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};