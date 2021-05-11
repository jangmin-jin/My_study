let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for(let i=0; i<smallPics.length; i++){
  smallPics[i].addEventListener("click", changePic);
}

function changePic(){
  bigPic.src = this.src;
}