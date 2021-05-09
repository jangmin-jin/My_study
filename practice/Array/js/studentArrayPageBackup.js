// 학생별 객체 선언
let subStu1 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu2 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu3 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu4 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu5 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu6 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu7 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu8 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu9 = new Set(["국어", "영어", "수학", "사회", "과학"]);
let subStu10 = new Set(["국어", "영어", "수학", "사회", "과학"]);

// 현재 선택된 학생을 변수에 담아 반환 해주는 func
let student = "";

function checkId(){
    student = document.getElementById("student");
    student = student.options[student.selectedIndex].id;
    document.querySelector("#printAria").innerHTML = "";
    
    printout();
}

// 입력한 과목을 해당 학생의 배열에 추가 해주는 기능
function addsubject() {
    let inputSub = document.querySelector("#inText").value;

    switch(student){
        case "stu1" : 
            if (inputSub != ""){
                subStu1.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu2" : 
            if (inputSub != ""){
                subStu2.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu3" : 
            if (inputSub != ""){
                subStu3.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu4" : 
            if (inputSub != ""){
                subStu4.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu5" : 
            if (inputSub != ""){
                subStu5.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu6" : 
            if (inputSub != ""){
                subStu6.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu7" : 
            if (inputSub != ""){
                subStu7.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu8" : 
            if (inputSub != ""){
                subStu8.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu9" : 
            if (inputSub != ""){
                subStu9.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
        case "stu10" : 
            if (inputSub != ""){
                subStu10.add(inputSub);
                document.querySelector("#inText").value="";
            } break;
    }
    if(inputSub == ""){
        alert("과목을 입력하셔야합니다.");
    }
    printout();
}

// 삭제버튼을 누르면 선택된 과목 삭제
function removeList() {
    let removeId = this.getAttribute("id");
    
    switch(student){
        case "stu1" : subStu1.delete(removeId); break;
        case "stu2" : subStu2.delete(removeId); break;
        case "stu3" : subStu3.delete(removeId); break;
        case "stu4" : subStu4.delete(removeId); break;
        case "stu5" : subStu5.delete(removeId); break;
        case "stu6" : subStu6.delete(removeId); break;
        case "stu7" : subStu7.delete(removeId); break;
        case "stu8" : subStu8.delete(removeId); break;
        case "stu9" : subStu9.delete(removeId); break;
        case "stu10" : subStu10.delete(removeId); break;
    }
    printout();
}

// 출력버튼을 누르면 선택된 학생에 맞춰 목록창 출력
function printout() {

    let result = "<ul>";

    switch(student){
        case "stu1" : 
            for(let sub of subStu1){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu2" : 
            for(let sub of subStu2){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu3" : 
            for(let sub of subStu3){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu4" : 
            for(let sub of subStu4){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu5" : 
            for(let sub of subStu5){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu6" : 
            for(let sub of subStu6){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu7" : 
            for(let sub of subStu7){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu8" : 
            for(let sub of subStu8){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
         case "stu9" : 
            for(let sub of subStu9){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        case "stu10" : 
            for(let sub of subStu10){
                result += "<li>" + sub +"<span class='deleteSub' id=" + sub + ">삭제</span></li>";
            }
            result += "</ul>"; break;
        default : alert("학생을 선택해주세요"); break;
    }    

    document.querySelector("#printAria").innerHTML = result;

    // 삭제를 위한 기믹 : 지정 class의 id값을 변수에 저장 id를 찾아 해당위치 제거 실행
    let deleteSub = document.querySelectorAll(".deleteSub");
    for(let i = 0; i < deleteSub.length; i++){
        deleteSub[i].addEventListener("click", removeList);
    }
}
