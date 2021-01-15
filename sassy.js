const menuBtn = document.querySelector('.myMenu-btn');
const hamburger = document.querySelector('.myMenu-btn-hamburger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-menu');
const navItems = document.querySelectorAll('.nav-menu-items');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        hamburger.classList.add('openMenu');
        nav.classList.add('openMenu');
        navMenu.classList.add('openMenu');
        navItems.forEach(item => item.classList.add('openMenu'));

        showMenu = true;
        
    } else {
        hamburger.classList.remove('openMenu');
        nav.classList.remove('openMenu');
        navMenu.classList.remove('openMenu');
         navItems.forEach(item => item.classList.remove('openMenu'));

        showMenu = false;
    }
}