const button = document.querySelector('.menu_button');
const menu = document.querySelector('.menu');
const content = document.querySelector('.content');


button.addEventListener('click', () => {
    menu.classList.toggle('active');
    content.classList.toggle('active');

});