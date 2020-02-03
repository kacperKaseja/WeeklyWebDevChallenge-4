const hamburger = document.querySelector('.navigation__hamburger')
const menu = document.querySelector('.navigation__list');

const hamburgerClick = function () {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
}

hamburger.addEventListener('click', hamburgerClick);

const searchInput = document.querySelector('.header__search-input');
const searchIco = document.querySelector('.header__search-ico path')

// searchInput.addEventListener('focus', ()=>{
//     searchIco.style.fill = "#56CCC8";
// })

// searchInput.focus()