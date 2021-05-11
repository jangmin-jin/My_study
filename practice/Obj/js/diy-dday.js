let now = new Date();
let firstDay = new Date("2020-02-27");

let toNow = now.getTime();
let toFirstDay = firstDay.getTime();
let passedTime = toNow - toFirstDay;

const min = 60;
const hour = 60;
const day = 24;
const msToSec = 1000;

// 만난뒤로 부터 지금까지 흐른 날
let passedDay = Math.round(passedTime/msToSec/min/hour/day);
document.querySelector("#accent").innerText = passedDay + "일";

let calcDate = (days) =>{
    let future = toFirstDay + days * (msToSec * min * hour * day);
    let someday = new Date(future);
    let year = someday.getFullYear();
    let month = someday.getMonth();
    let date = someday.getDate();

    document.querySelector("#date" + days).innerText = year + "년 " + month + "월 " + date + "일";
}

calcDate(100);
calcDate(200);
calcDate(365);
calcDate(500);

// // 100일 되는 날
// let futureDay100 = toFirstDay + 100 * (msToSec * min * hour * day);
// let day100 = new Date(futureDay100);
// let yearDay100 = day100.getFullYear();
// let monthDay100 = day100.getMonth();
// let dateDay100 = day100.getDate();

// // 200일 되는 날
// let futureDay200 = toFirstDay + 200 * (msToSec * min * hour * day);
// let day200 = new Date(futureDay200);
// let yearDay200 = day200.getFullYear();
// let monthDay200 = day200.getMonth();
// let dateDay200 = day200.getDate();

// // 1년 되는 날
// let futureDay365 = toFirstDay + 365 * (msToSec * min * hour * day);
// let day365 = new Date(futureDay365);
// let yearDay365 = day365.getFullYear();
// let monthDay365 = day365.getMonth();
// let dateDay365 = day365.getDate();

// // 500일 되는 날
// let futureDay500 = toFirstDay + 500 * (msToSec * min * hour * day);
// let day500 = new Date(futureDay500);
// let yearDay500 = day500.getFullYear();
// let monthDay500 = day500.getMonth();
// let dateDay500 = day500.getDate();



// document.querySelector("#date100").innerText = yearDay100 + "년 " + monthDay100 + "월 " + dateDay100 + "일";
// document.querySelector("#date200").innerText = yearDay200 + "년 " + monthDay200 + "월 " + dateDay200 + "일";
// document.querySelector("#date365").innerText = yearDay365 + "년 " + monthDay365 + "월 " + dateDay365 + "일";
// document.querySelector("#date500").innerText = yearDay500 + "년 " + monthDay500 + "월 " + dateDay500 + "일";