export default function getErrorMessage() {
  const errorWindow = document.querySelector('.error');

  errorWindow.classList.add('active');
  setTimeout(() => {
    errorWindow.classList.remove('active');
  }, 1200);
}
