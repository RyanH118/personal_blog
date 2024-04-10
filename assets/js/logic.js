// this function is what makes the page go back.
function goBack() {
    window.history.back();
}


const themeToggle = document.getElementById('theme');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

const storedTheme = localStorage.getItem('theme');
if (storedTheme === 'dark') {
  body.classList.add('dark-theme');
}