var i = 0;
var images = [];
var time = 3000;

images[0] = '/images/img4.jpg';
images[1] = '/images/img5.jpg';
images[2] = '/images/img6.jpg';

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
