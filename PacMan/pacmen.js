var pos = 0;
let pageWidth = window.innerWidth;
const pacArray = [
  ["./images/PacMan1.png", "./images/PacMan2.png"],
  ["./images/PacMan3.png", "./images/PacMan4.png"],
];
//pacArray is images of open and shut going both directions. 
var direction = 0;  //direction is left-right or right-left 0 or 1
var focus = 0; //focus is flip 

function Run() {
  let img = document.getElementById("PacMan");
  let imgWidth = img.width;
  focus = (focus + 1) % 2; //adding one to focus and then dividing by 2: even (0) vs odd (1) determines flip 
  img.src = pacArray[direction][focus];
  //img.src (wher we are getting the image) is accessing the array
  //pacArray and depending on its direction and focus, will define which images we are choosing
  if (direction) {
    pos -= 20; // add -20 if 'direction' is true (0 is false, (+1 is true) 
    img.style.left = pos + "px";
  } else {
    pos += 20; //if direction is 0, then it is not true, and it will run this one (left-right)
    img.style.left = pos + "px";
  }
}
setInterval(Run, 200);//animates it by calling Run function

function checkPageBounds(direction, imgWidth, pos, pageWidth) {
  if (direction == 0 && pos + imgWidth > pageWidth) direction = 1;
  if (direction == 1 && pos < 0) direction = 0;
  //chooses 'direction' by checking where the img is and whether the LH side <0 or if RH > page width

  return direction;
}

module.exports = checkPageBounds;
//If direction is 1(true)=right to left
//If direction is 0(false)=left to right