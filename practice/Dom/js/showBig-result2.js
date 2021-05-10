let bigPic2 = document.querySelector("#cup");
let smallPics2 = document.querySelectorAll(".small");

function changePic(event){
  for(let i=0; i<smallPics2.length; i++){
    smallPics2[i].onclick = function(){
      bigPic2.src = this.src;
    }
  }
}