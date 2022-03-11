import { colorToggle, colorSwitcher } from "./darkAndLight";

var i = 0;
var images1 = [];
var images2 = [];
var images3 = [];
var time = 2000;

images1[0] = '/src/images/codesnip1.png';
images1[1] = '/src/images/codesnip2.png';
images1[2] = '/src/images/codesnip3.png';
images1[3] = '/src/images/codesnip4.png';
images1[4] = '/src/images/codesnip5.png';
images1[5] = '/src/images/codesnip6.png';
images1[6] = '/src/images/codesnip7.png';
images1[7] = '/src/images/codesnip8.png';
images1[8] = '/src/images/codesnip9.png';
images1[9] = '/src/images/codesnip10.png';
images1[10] = '/src/images/codesnip11.png';
images1[11] = '/src/images/codesnip12.png';
images1[12] = '/src/images/codesnip13.png';
images1[13] = '/src/images/codesnip14.png';

images2[0] = '/src/images/codesnip15.png';
images2[1] = '/src/images/codesnip16.png';
images2[2] = '/src/images/codesnip17.png';
images2[3] = '/src/images/codesnip18.png';
images2[4] = '/src/images/codesnip19.png';


images3[0] = '/src/images/codesnip20.png';
images3[1] = '/src/images/codesnip21.png';
images3[2] = '/src/images/codesnip22.png';
images3[3] = '/src/images/codesnip23.png';
images3[4] = '/src/images/codesnip24.png';
images3[5] = '/src/images/codesnip25.png';
images3[6] = '/src/images/codesnip26.png';
images3[7] = '/src/images/codesnip27.png';
images3[8] = '/src/images/codesnip28.png';
images3[9] = '/src/images/codesnip29.png';
images3[10] = '/src/images/codesnip30.png';
images3[11] = '/src/images/codesnip31.png';


function changeImg1() {
  document.slide1.src = images1[i];
  
  if(i < images1.length){
    i++
  } else {
    i = 0;
  }

  setTimeout("changeImg1()", time);
}

function changeImg2() {
  document.slide2.src = images2[i];

  if(i < images2.length){
    i++
  } else {
    i = 0;
  }

  setTimeout("changeImg2()", time);
}

function changeImg3() {
  document.slide3.src = images3[i];
  
  if(i < images3.length){
    i++
  } else {
    i = 0;
  }

  setTimeout("changeImg3()", time);
} 

window.addEventListener('load', changeImg1);
window.addEventListener('load', changeImg2);
window.addEventListener('load', changeImg3);