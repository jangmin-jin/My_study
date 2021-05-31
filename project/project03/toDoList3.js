// Todo목록들과 목록들이 삽입, 수정된 시간을 담을 배열선언
let toDoList = new Array;
let toDoListTime = new Array;

// Todo추가, 수정할때마다 실행하여 시간을 기록
const addTime = () =>{
  let time = new Date();
  // let inputTime = time.format("yyyy-MM-dd(KS) HH:mm:ss");
  const year = time.getFullYear();
  const month = time.getMonth()+1;
  const date = time.getDate();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  // 탬플릿 선언
  let inputTime =`${year}-${month}-${date} ${hours}:${minutes}:${seconds}` 
  return inputTime
}

// 입력했을시 입력값에 따른 예외처리
const checkToDoText = (userInputText) =>{
  if (userInputText == ""){
    alert("해야할 일을 입력하세요 !");
    return true
  }
  return false
}

// 수정했을시 수정값에 따른 예외처리
const checkModifyText = (modifyText) =>{
  if(modifyText == ""){
    alert("수정 사항을 입력하세요 !");
    return true
  }
  return false
}

// Todo추가를 위한 함수
const addToDoList = () =>{
  let userInputText = document.querySelector("#inputList").value;
  userInputText = userInputText.trim();

  // 입력 조건 확인
  if(checkToDoText(userInputText)) {
    return
  }

  document.querySelector("#inputList").value = "";
  
  // 입력한 Todo, 시간 추가
  toDoList.push(userInputText);
  toDoListTime.push(addTime());

  // 프린트
  printToDo();
}

// let addLi = () =>{
//   let targetUl = document.getElementById("printAriaUl");
  
// }

const printToDo = () =>{
  // 결과값에 포함된 요소들
  // 1. checkbox
  // 2. Todo항목
  // 3. Todo삽입, 수정시 반영된 시간
  // 4. 수정 작업을 위한 로직
  // 5. 삭제 작업를 위한 로직
  let result = "<ul>";
  for(let list in toDoList){
    result += "<li>"
            + "<input type='checkbox' id='cb" + list +"' name='checkbox' value=" + "'" + list + "'" + "'></input>"
            + "<label for='cb" + list + "'>"
            + "<span class='todoList'>" + toDoList[list] + "</span>" +"\t"
            + "<span class='addTime'>" + toDoListTime[list] + "</span>" + "\t"
            + "<span class='modifyToDo' id=" + "'" + list + "'" + "></span>" +"\t"
            + "<span class='delToDo' id=" + "'" + list + "'" + "></span>" +"\t"
            +"</label></li>";
  }
  result += "</ul>";
  
  // printAria에 결과출력
  const printAria = document.querySelector("#printAria");
  printAria.innerHTML = result;

  // 삭제 이벤트 감지 - 해당요소 삭제후 다시 출력
  let delToDo = document.querySelectorAll(".delToDo");
  for(let i=0; i<delToDo.length; i++){
    delToDo[i].addEventListener("click", function(){
      const delToDoWhat = this.getAttribute("id");
      delete toDoList[delToDoWhat];
      
      printToDo();
    });
  }

  // 수정 이벤트 감지 - 해당요소 수정후 다시 출력
  let modifyToDo = document.querySelectorAll(".modifyToDo");
  for(let i=0; i<modifyToDo.length; i++){
    modifyToDo[i].addEventListener("click", function(){
      const modifyToDoWhat = this.getAttribute("id");

      // 수정 실행 함수
      modifyToDoList(modifyToDoWhat);
      printToDo();
    })
  }
}

// 수정 실행 함수
const modifyToDoList = (modifyToDoWhat) =>{
  let modifyText = prompt("할일을 다시 입력해주세요!");
  
  // 수정 조건 검증
  if(checkModifyText(modifyText)) return;
  
  // Todo와 반영시간 수정
  toDoList[modifyToDoWhat] = modifyText;
  toDoListTime[modifyToDoWhat] = addTime();
}