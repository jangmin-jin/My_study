function showText(){
  let userName = document.querySelector("#userName");
  let nameList = document.querySelector("#nameList");
  let newP = document.createElement("p");
  let newText = document.createTextNode(userName.value);
  
  newP.appendChild(newText);
  nameList.appendChild(newP);
  
  let delBtn = document.createElement("span");
  let delText = document.createTextNode("X");
  delBtn.setAttribute("class", "del");

  delBtn.appendChild(delText);
  newP.appendChild(delBtn);
  
  nameList.insertBefore(newP, nameList.childNodes[0]);

  userName.value= "";

  let removeText = document.querySelectorAll(".del");
  for(let i=0; i<removeText.length; i++){
    removeText[i].addEventListener("click", function(){
      if(this.parentNode.parentNode){
        this.parentNode.parentNode.removeChild(this.parentNode);
      }
    });
  }
}