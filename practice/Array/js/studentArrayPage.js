// 학생별 객체 생성 함수
let makeStudent = function(name, kor, eng, math, soci, sci) {
    let obj = {
        이름: name,
        국어: kor,
        영어: eng,
        수학: math,
        사회: soci,
        과학: sci
    };
    return obj;
}

// 학생별 객체 생성
let stuArr = new Array;
stuArr[0] = makeStudent("학생1", 0, 0, 0, 0, 0);
stuArr[1] = makeStudent("학생2", 0, 0, 0, 0, 0);
stuArr[2] = makeStudent("학생3", 0, 0, 0, 0, 0);
stuArr[3] = makeStudent("학생4", 0, 0, 0, 0, 0);
stuArr[4] = makeStudent("학생5", 0, 0, 0, 0, 0);
stuArr[5] = makeStudent("학생6", 0, 0, 0, 0, 0);
stuArr[6] = makeStudent("학생7", 0, 0, 0, 0, 0);
stuArr[7] = makeStudent("학생8", 0, 0, 0, 0, 0);
stuArr[8] = makeStudent("학생9", 0, 0, 0, 0, 0);
stuArr[9] = makeStudent("학생10", 0, 0, 0, 0, 0);

// 변수선언
let student = 0;
let inputSub = "";
let inputScore = 0;

// 현재 선택된 학생을 변수에 담아 반환 해주는 func
function checkId(){
    student = document.getElementById("student");
    student = Number(student.options[student.selectedIndex].id);
    document.querySelector("#printAria").innerHTML = "";
}

// 과목입력 점수를 검증해주는 기능
function checksubject(inputScore) {
    if (inputScore <0 || inputScore >100){
        alert("0 ~ 100 까지 입력해주세요.");
        return true;
    }
    if (inputSub !== "이름" && isNaN(inputScore)){
        alert("숫자를 입력해주세요.");
        return true;
    };

    return false;
}

// 입력한 과목을 해당 학생의 배열에 추가 해주는 기능

function addsubject() {
    inputSub = document.querySelector("#inTextSub").value;
    inputSub = inputSub.replace(/^\s+|\s+$/gm, '');
    inputScore = document.querySelector("#inTextScore").value;

    if(checksubject(inputScore)){
        return;
    }else if(inputSub == ""){
        alert("과목을 입력하셔야합니다.");
        return;
    }else if (inputScore == ""){ 
        alert("숫자를 입력해주세요.");
        return;
    }else{
        stuArr[student][inputSub] = inputScore;
        document.querySelector("#inTextSub").value=""; 
        document.querySelector("#inTextScore").value=""; 
        printout();
    };
}

// 출력버튼을 누르면 선택된 학생에 맞춰 목록창 출력
function printout() {
    // if(inputSub =="" && inputScore == ""){
    //     alert("입력값을 확인해 주세요.");
    //     return;
    // }
    let result = "<ul>";
    for(let key in stuArr[student]){
        result += "<li>" + key + "\t : \t" + stuArr[student][key] +"<span class='deleteSub' id=" + "'" + key + "'" + ">삭제</span></li>";
    }
    result += "</ul>";

    document.querySelector("#printAria").innerHTML = result;

    // 삭제를 위한 기믹
    let deleteSub = document.querySelectorAll(".deleteSub");
    for(let i = 0; i < deleteSub.length; i++){
        deleteSub[i].addEventListener("click", removeList);
    }
}

// 삭제버튼을 누르면 선택된 과목 삭제
function removeList() {
    let removeId = this.getAttribute("id");
    
    if(removeId == "이름"){
        alert("이름은 삭제할 수 없습니다.");
        return;
    }else{ 
        delete stuArr[student][removeId];
        printout();
    }
}