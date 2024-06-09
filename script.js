document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navRight = document.querySelector('.right ul');

    menuToggle.addEventListener('click', function() {
        navRight.classList.toggle('active');
    });
});