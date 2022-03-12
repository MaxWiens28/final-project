var i = 0;
var images = [];
var time = 2000;
const colorToggle = document.querySelector('#colorToggle').addEventListener('click', colorSwitcher);

images[0] = '/images/img1.png';
images[1] = '/images/img2.png';
images[2] = '/images/img3.png';

function changeImg() {
  document.slide.src = images[i];
  
  if(i < images.length){
    i++
  } else {
    i = 0;
  }

  setTimeout("changeImg()", time);
}

window.onload = changeImg;
  
function colorSwitcher() {
  document.body.classList.toggle('dark');
};