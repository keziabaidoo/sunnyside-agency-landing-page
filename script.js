document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger .img-hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const triangle = document.querySelector('#triangle');
    const mobileHamburger = document.querySelector('.mobile-hamburger');

    burger.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        triangle.classList.toggle('active');
        mobileHamburger.classList.toggle('active');
    });
});