let toDoList = new Array;
let toDoListTime = new Array;

let addTime = () =>{
  let time = new Date();
  let inputTime = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate() + " " + time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds();
  return inputTime;
}

let checkToDoText = (userInputText) =>{
  if (userInputText == ""){
    alert("해야할 일을 입력하세요 !");
    return true;
  }
  return false;
}

let checkModifyText = (modifyText) =>{
  if(modifyText == ""){
    alert("수정 사항을 입력하세요 !");
    return true;
  }
  return false;
}

let addToDoList = () =>{
  let userInputText = document.querySelector("#inputList").value;
  userInputText = userInputText.replace(/^\s+|\s+$/gm, '');
  if(checkToDoText(userInputText)) return;

  document.querySelector("#inputList").value = "";
  toDoList.push(userInputText);
  
  toDoListTime.push(addTime());
  printToDo();
}

let printToDo = () =>{

  let result = "<ul>";
  for(let list in toDoList){
    result += "<li>" 
            + toDoList[list] +"\t\t\t"
            + toDoListTime[list] +"\t"
            + "<span class='modifyToDo' id=" + "'" + list + "'" + ">M</span>" +"\t"
            + "<span class='delToDo' id=" + "'" + list + "'" + ">X</span>" +"\t"
            +"</li>";
  }
  result += "</ul>";

  let printAria = document.querySelector("#printAria");
  printAria.innerHTML = result;

  let delToDo = document.querySelectorAll(".delToDo");
  for(let i=0; i<delToDo.length; i++){
    delToDo[i].addEventListener("click", function(){
      console.log("발생");
      const delToDoWhat = this.getAttribute("id");
      delete toDoList[delToDoWhat];
      
      printToDo();
    });
  }

  let modifyToDo = document.querySelectorAll(".modifyToDo");
  for(let i=0; i<modifyToDo.length; i++){
    modifyToDo[i].addEventListener("click", function(){
      const modifyToDoWhat = this.getAttribute("id");
      modifyToDoList(modifyToDoWhat);
      printToDo();
    })
  }
}

let modifyToDoList = (modifyToDoWhat) =>{
  let modifyText = prompt("할일을 다시 입력해주세요!");
  if(checkModifyText(modifyText)) return;
  
  toDoList[modifyToDoWhat] = modifyText;
  toDoListTime[modifyToDoWhat] = addTime();
}