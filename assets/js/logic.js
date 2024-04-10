// this function is what makes the page go back.
function goBack() {
    window.history.back();
}


const themeToggle = document.getElementById('theme');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
    body.classList.add('dark-theme');
  }
  body.classList.toggle('dark-theme');
});