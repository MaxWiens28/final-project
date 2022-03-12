var i = 0;
var images = [];
var time = 2000;

images[0] = '/src/images/img1.png';
images[1] = '/src/images/img2.png';
images[2] = '/src/images/img3.png';

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