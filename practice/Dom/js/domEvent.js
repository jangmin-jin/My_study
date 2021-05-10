
let girl = document.querySelector("#pic");
let boysrc = "./images/boy.png";
let girlsrc = "./images/girl.png";

// 여자애 그림을 남자애 그림으로 바꿔주기
// onclick시 함수 발생하게끔 연결
// function changeSex(){
//   girl.src = boysrc;
// }

// 마우스action에 따라 함수 실행하는 addEventListener 선언
girl.addEventListener( "mouseover", changePic);
girl.addEventListener( "mouseout", originPic);

function changePic(){
  this.src = boysrc;
}
function originPic(){
  this.src = girlsrc;
}

// 문서의 아무곳이나 누르면 문자를 출력하는 함수
document.addEventListener("click", hello, false);

function hello(){
  console.log("hello");
}