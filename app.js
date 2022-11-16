const body = document.querySelector('body');
const header = document.querySelector('header');
const cards = document.querySelectorAll('.container');
const slider = document.querySelector('.slider');



slider.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    header.classList.toggle('dark-mode-header');
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle('dark-mode-card');
    }
});