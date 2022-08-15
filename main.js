const menuBtn = document.querySelector('.menu-btn');
const mainMenu = document.querySelector('.main-menu')


menuBtn.addEventListener('click', navToggle)


function navToggle() {
    mainMenu.classList.toggle('show');
    document.body.classList.toggle('stop-scroll')
}


// document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'))