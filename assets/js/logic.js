// this function is what makes the page go back.
function goBack() {
    window.history.back();
}


const themeToggle = document.getElementById('theme');
const body = document.body;

// event listener is waiting for a click on the "Click me!" button.
themeToggle.addEventListener('click', () => {
  // This if else is checking for the class to see if it's there and if it needs to be added when clicked.
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
    body.classList.add('dark-theme');
  }
  body.classList.toggle('dark-theme');
});