// id 순서를 정하는 변수
let todoId = 0;

const addToDoList = () =>{
  /* Dom tree 구조
    div(id="printAria")
    ㄴ
      ul(id=ul+todoId)
      ㄴ
        li(class=todoList)
        ㄴ checkBox
        ㄴ 텍스트
        ㄴ modify(class=modifyToDo id=todoId)
        ㄴ delete(class=delToDo id=todoId)
  */
  // 입력창
  const inputToDoList = document.querySelector("#inputList");
  // 입력한 텍스트 검증
  if( checkinputTodoText(inputToDoList.value) ){
    return
  }

  // 프린트 영역
  const printArea = document.querySelector("#printAria");
  // ul li 선언
  const printAreaUl = document.createElement("ul");
  printAreaUl.setAttribute("id", "ul" + todoId);
  const printAreaLi = document.createElement("li");
  printAreaLi.setAttribute("class", "todo_List");
  // printAreaLi.setAttribute("id", "li" + todoId);

  //체크박스
  const checkTodo = document.createElement("input")
  checkTodo.type="checkbox";

  // 입력창에 입력한 텍스트
  const addTodoListP = document.createElement("span");
  addTodoListP.setAttribute("class", "add_text");
  const inputToDoListValue = inputToDoList.value;
  const addTodoList = document.createTextNode(inputToDoListValue.trim());
  addTodoListP.appendChild(addTodoList);

  // 입력한 시간
  const addTodoWhenTimeP = document.createElement("span");
  addTodoWhenTimeP.setAttribute("class", "add_time");
  const whenInput = addTime();
  const addTodoWhenTime = document.createTextNode(whenInput);
  addTodoWhenTimeP.appendChild(addTodoWhenTime);
  

  // 수정, 삭제를 위한 트리 작성
  const modifyTodo = document.createElement("span");
  modifyTodo.setAttribute("class", "modify_text");
  modifyTodo.setAttribute("id", todoId);
  const modifyTodoText = document.createTextNode("[수정]");

  const delTodo = document.createElement("span");
  delTodo.setAttribute("class", "del_text");
  delTodo.setAttribute("id", todoId);
  const delTodoText = document.createTextNode("[삭제]");
  // 텍스트 추가
  modifyTodo.appendChild(modifyTodoText);
  delTodo.appendChild(delTodoText);

  // 상속
  // li <- checkTodo(체크박스)
  // li <- addTodoListP(입력 텍스트)
  // li <- addTodoWhenTimeP(입력 시간 텍스트)
  // li <- modifyTodo(수정을위한 버튼)
  // li <- delTodo(삭제를위한 버튼)
  printAreaLi.appendChild(checkTodo);
  printAreaLi.appendChild(addTodoListP);
  printAreaLi.appendChild(addTodoWhenTimeP);
  printAreaLi.appendChild(modifyTodo);
  printAreaLi.appendChild(delTodo);

  // printArea(출력부) <- ul(리스트 틀) <- li(5가지요소 포함)
  printAreaUl.appendChild(printAreaLi);
  printArea.appendChild(printAreaUl);

  // 출력시, 최근 추가한 사항이 상위로 올라오도록
  printArea.insertBefore(printAreaUl, printArea.childNodes[0]);
  inputToDoList.value="";

  // 추가시 id값 ++
  todoId++;

  // 삭제
  const doDelTodo = document.querySelector(".del_text");
  doDelTodo.addEventListener("click", function(){
    // 지우자 하는 버튼의 id값을 이용
    delTodoFunc(this.id);
  });

  // 수정
  const doModifyTodo = document.querySelector(".modify_text");
  doModifyTodo.addEventListener("click", function(){
    // 수정하고자 하는 버튼의 id값을 이용
    modifyFunc(this.id);
  });
}

// 삭제 함수
const delTodoFunc = (delId) =>{
  console.log(delId);
  const delWhat = document.getElementById('ul' + delId);
  delWhat.parentNode.removeChild(delWhat);
}

// 수정 함수
const modifyFunc = (modifyId) =>{

  const thisLiAddress = 0;
  const thisTextAddress = 1;
  const thisTimeAddress = 2;
  const modiText = document.getElementById('ul' + modifyId).childNodes[thisLiAddress].childNodes[thisTextAddress];
  const modiTime = document.getElementById('ul' + modifyId).childNodes[thisLiAddress].childNodes[thisTimeAddress];
  
  // 수정사항 입력
  const inputModiText = prompt("수정사항을 입력하세여");
  
  // 입력값 검증
  if(checkinputTodoText(inputModiText.trim())){
    return
  } 

  // 수정시간, 수정사항 적용
  modiTime.textContent = addTime();
  modiText.textContent = inputModiText;
}

// 모든리스트 삭제 함수
const delAllList = () =>{
  const allList = document.getElementById('printAria');
  while(allList.hasChildNodes()){
    allList.removeChild(allList.firstChild);
  }
}

// 입력값 검증 함수
const checkinputTodoText = (inputText) =>{
  if(inputText == ""){
    alert("내용을 입력하세요!");
    return true
  } else{
    return false
  }
}

// 시간 추가 함수
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