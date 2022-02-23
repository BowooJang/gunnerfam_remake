const button = document.querySelector('.menu_button');
const menu = document.querySelector('.menu');

button.addEventListener('click', () => {
    menu.classList.toggle('active');
});