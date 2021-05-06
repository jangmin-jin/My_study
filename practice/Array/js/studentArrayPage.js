// 학생별 배열 선언
let student = new Array;

let addBtn = document.querySelector("#addBtn");
addBtn.addEventListener("click", addScore);

let student2 = {
    name : "학생 2",
    korean : 0,
    english : 0,
    math : 0,
    society : 0,
    science : 0
};

// 학생별 과목 이름 과 성적이 들어갈 추가 배열 선언

// 입력한 성적을 해당 배열의 값에 추가 해주는 기능

function addScore() {
    let score = document.querySelector("#inText").value;
    let selectSub = document.getElementById("subject");
    selectSub = selectSub.options[selectSub.selectedIndex].value;

    switch( selectSub ){
        case "korean" : student2.korean = 80; break;
    }


    console.log(score);
    console.log(selectSub);
    console.log(student2.korean);
    // if ( score != null ){
    //     student1.
    // }
}

// 학생 선택후 출력을 누르면 해당학생이 가지고 있는 성적 정보 출력 (inner.HTML)
