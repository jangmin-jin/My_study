// 주민 번호 검사기
let checkJumin = function(str_Jumin){
    let arr_Jumin = str_Jumin.split('-');
    let arr_JuminSplit = [...arr_Jumin[0],...arr_Jumin[1]];
    // 숫자로 변환
    for(let i=0; i<=12; i++){
     arr_JuminSplit[i] = Number(arr_JuminSplit[i]); 
    }
    // 각 자릿수 계산 N = n1 + n2 + n3 + ... + n12
    let value = 0;
    for(let i=0; i<12; i++){
        if(i<8){
            value += arr_JuminSplit[i]*(i+2);
        }
        else{
            value += arr_JuminSplit[i]*(i-6);
        }
    }
    // 결과 판단 (11 - (N % 11)) % 10 = 마지막 자릿수
    if(((11-(value%11))%10)==arr_JuminSplit[12]){
        return true;                
    }else{
        return false;
    }
}