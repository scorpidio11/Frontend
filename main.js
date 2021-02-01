

const mainMenu = document.querySelector('.nav_menu nav');
const closeMenu = document.querySelector('.close');
const openMenu = document.querySelector('.hamburger_btn');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}
