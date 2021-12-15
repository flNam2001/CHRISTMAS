const menuToggle = document.querySelector('.toggle');
const showCaseMenu = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
    showCaseMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});