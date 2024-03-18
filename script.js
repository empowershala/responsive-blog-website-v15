
// Dark/Light mode

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('ri-sun-line');
    document.body.classList.toggle('dark-mode');
};