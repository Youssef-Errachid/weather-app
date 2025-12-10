
const logo = document.getElementById('logo');
const toggle = document.getElementById('Mode');
const body = document.body;
const modeText = document.getElementById('Mode1');


body.className = 'light-mode';

toggle.addEventListener('change', function() {
    if (this.checked) {
        body.className = 'dark-mode';
        modeText.textContent = 'Dark Mode';
        logo.src = "images/weather logo dark mode.png";  
    } else {
        body.className = 'light-mode';
        modeText.textContent = 'Light Mode';
        logo.src = "images/weather logo.png";
    }
});
