const container = document.getElementById('container');

document.querySelectorAll('[data-switch="signup"]').forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });
});

document.querySelectorAll('[data-switch="signin"]').forEach((btn) => {
  btn.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
});
