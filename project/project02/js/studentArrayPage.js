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
const stuArr = new Array;
const stuNuber = 10;
for(let i=0; i<stuNuber; i++){
    stuArr[i] = makeStudent("학생"+(i+1), 0, 0, 0, 0, 0);
}

// 입력한 과목, 점수를 해당 학생의 배열 요소안에 추가
function addSubScore() {
    const stuWho = Number(student.options[student.selectedIndex].id);
    let inputSub = document.querySelector("#inTextSub").value;

    // 양쪽 공백 제거
    inputSub = inputSub.replace(/^\s+|\s+$/gm, '');
    let inputScore = document.querySelector("#inTextScore").value;

    // 예외 처리
    if(checksubject(inputScore, inputSub)){
        return;
    }else if(inputSub == ""){
        alert("과목을 입력하셔야합니다.");
        return;
    }else if (inputScore == ""){ 
        alert("숫자를 입력해주세요.");
        return;
    }else{
        stuArr[stuWho][inputSub] = inputScore;
        document.querySelector("#inTextSub").value=""; 
        document.querySelector("#inTextScore").value=""; 
        printout();
    };
}

// 입력된 점수와 과목을 검증
function checksubject(inputScore, inputSub) {
    if (inputScore <0 || inputScore >100){
        alert("0 ~ 100 까지 입력해주세요.");
        return true;
    }
    // 특이 조건 : 이름 칸외엔 문자입력 불허
    if (inputSub !== "이름" && isNaN(inputScore)){
        alert("숫자를 입력해주세요.");
        return true;
    };
    return false;
}

// 출력버튼을 누르면 선택된 학생에 맞춰 목록창 출력
function printout() {
    const stuWho = Number(student.options[student.selectedIndex].id);

    let result = "<ul>";
    for(let key in stuArr[stuWho]){
        result += "<li>" + key + "\t : \t" + stuArr[stuWho][key] 
                + "<span class='deleteSub' id=" + "'" + key + "'" + ">삭제</span></li>";
    }
    result += "</ul>";
    document.querySelector("#printAria").innerHTML = result;

    // 삭제를 위한 기믹
    let deleteSub = document.querySelectorAll(".deleteSub");
    for(let i = 0; i < deleteSub.length; i++){
        deleteSub[i].addEventListener("click", function(){
            
            const removeId = this.getAttribute("id");
            if(removeId == "이름"){
                alert("이름은 삭제할 수 없습니다.");
                return;
            }else{ 
                delete stuArr[stuWho][removeId];
                printout();
            }
        });
    }
}