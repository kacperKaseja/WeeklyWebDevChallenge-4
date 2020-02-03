const hamburger = document.querySelector('.navigation__hamburger')
const menu = document.querySelector('.navigation__list');

const hamburgerClick = function () {
    hamburger.classList.toggle('open');
    menu.classList.toggle('open');
}

hamburger.addEventListener('click', hamburgerClick);

const searchInput = document.querySelector('.header__search-input');
const searchIco = document.querySelector('.header__search-ico path')

searchInput.addEventListener('focus', () => {
    searchIco.style.fill = "#56CCC8";
})

searchInput.addEventListener('blur', () => {
    searchIco.style.fill = "red";
})


//SLider Section

const btnPrevius = document.querySelector('.slider__button--prev');
const btnNext = document.querySelector('.slider__button--next');


const sliderContainer = document.querySelector('.slider');
const images = ['1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
]

let i = images.length;
console.log(i);

btnPrevius.addEventListener('click', () => {
    i = (i < images.length + 1 && i > 1) ? (i = i - 1) : (i = images.length);
    sliderContainer.style.background = `url('${images[i-1]}') no-repeat center`;
    sliderContainer.backgroundSize = 'cover';
});
btnNext.addEventListener('click', () => {
    i = (i < images.length) ? (i = i + 1) : (i = 1);
    sliderContainer.style.background = `url('${images[i-1]}') no-repeat center`;
    sliderContainer.backgroundSize = 'cover';
});