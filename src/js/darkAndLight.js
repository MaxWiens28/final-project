const colorToggle = document.querySelector('#colorToggle').addEventListener('click', colorSwitcher);
  
function colorSwitcher() {
  document.body.classList.toggle('dark');
};
