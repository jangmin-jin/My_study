let isOpen = false;
let bigPic2 = document.querySelector("#cup");
let smallPics2 = document.querySelectorAll(".small");

function changePic(event){
  for(let i=0; i<smallPics2.length; i++){
    smallPics2[i].onclick = function(){
      bigPic2.src = this.src;
    }
  }
}

let detail = document.querySelector("#view");
detail.addEventListener("click", showDetail);

function showDetail(){
  if(isOpen == false){
    document.querySelector("#detail").style.display ="block";
    detail.innerHTML = "상세 설명 닫기";
    isOpen = true;
  }else{
    document.querySelector("#detail").style.display ="none";
    detail.innerHTML = "상세 설명 보기";
    isOpen = false;
  }
}