let toDoList = new Array;

let addToDoList = () =>{
  let nodeP = document.createElement("p");
  let todoWhat = document.querySelector("#inputList");
  let todoList = document.createTextNode(todoWhat.value);
  nodeP.appendChild(todoList);

  let delToDoBtn = document.createElement("span");
  let delToDoList = document.createTextNode("X");
  delToDoBtn.setAttribute("class", "delToDo");
  delToDoBtn.appendChild(delToDoList);
  nodeP.appendChild(delToDoBtn);

  let print = document.querySelector("#printAria");
  print.insertBefore(nodeP, print.childNodes[0]);
}