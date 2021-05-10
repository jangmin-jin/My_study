let bigPic = document.querySelector("#cup");
let smallPics = document.querySelectorAll(".small");

for(let i=0; i<smallPics.length; i++){
  smallPics[i].onclick = showBig;
}

function showBig() {
  let newPic = this.src;
  bigPic.setAttribute("src", newPic);
}

for(let i=0; i<smallPics.length; i++){
  smallPics[i].onclick = function(){
    bigPic.src = this.src;
  };
}