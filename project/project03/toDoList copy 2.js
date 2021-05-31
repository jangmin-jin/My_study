

let addToDoList = () =>{
  /* Dom tree 구조
    div
      ul
        li
          checkBox
          텍스트 입력
          modify
          delete
        /li
      /ul
    /div
  */
  // 입력창
  let inputToDoList = document.querySelector("#inputList");
  // 프린트 영역
  let printArea = document.querySelector("#printAria");
  // ul li 선언
  let printAreaUl = document.createElement("ul");
  let printAreaLi = document.createElement("li");
  printAreaLi.setAttribute("class", "todoList");

  //체크박스
  let checkTodo = document.createElement("input")
  checkTodo.type="checkbox";

  // 입력창에 입력한 텍스트
  let addTodoList = document.createTextNode(inputToDoList.value);

  // 수정, 삭제를 위한 트리 작성
  let modifyTodo = document.createElement("span");
  modifyTodo.setAttribute("class", "modifyToDo");
  let modifyTodoText = document.createTextNode("[수정]");
  let delTodo = document.createElement("span");
  delTodo.setAttribute("class", "delToDo")
  let delTodoText = document.createTextNode("[삭제]");

  // 수정, 삭제를 li의 자식으로 설정
  modifyTodo.appendChild(modifyTodoText);
  delTodo.appendChild(delTodoText);

  printAreaLi.appendChild(checkTodo);
  printAreaLi.appendChild(addTodoList);
  printAreaLi.appendChild(modifyTodo);
  printAreaLi.appendChild(delTodo);

  printAreaUl.appendChild(printAreaLi);

  printArea.appendChild(printAreaUl);

  // 출력시, 최근 추가한 사항이 상위로 올라오도록
  printArea.insertBefore(printAreaUl, printArea.childNodes[0]);
  inputToDoList.value="";

  let doDelTodo = document.querySelectorAll(".delToDo");
  for(let i=0; i<doDelTodo.length; i++){
    doDelTodo[i].addEventListener("click", DelTodoFunc);
  }
}

let DelTodoFunc = () => {
  let target = document.querySelector("li");
  console.log(target);
  // if(this.parentNode.parentNode){
  //   this.parentNode.parentNode.removeChild(this.parentNode);
  // }
}