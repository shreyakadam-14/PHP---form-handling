const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const list = document.getElementById('list');
const options = document.querySelectorAll('.options');

selectField.addEventListener('click', () => {
  list.classList.toggle('show');
  if (list.classList.contains('show')) {
    selectText.textContent = 'Select City';
  }
});

options.forEach(option => {
  option.addEventListener('click', () => {
    selectText.textContent = option.textContent;
    list.classList.remove('show');
  });
});
