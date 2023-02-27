//---함수---
/*
function 함수이름(매개변수){
 함수를 호출했을 때 실행할 명령문
}

※매개변수, 데이터 반환(return) -> 선택적
*/

//(1)함수 선언식
function hello(){
    alert("안녕하세요")
}
//undefined

hello()  
//undefined
//-->>함수 실행 방법, 작성 방법 달라도 실행 방법은 동일

function hello1(name){
    alert(name + '님 안녕')
}
//undefined

let friend = "김코딩"
//undefined

hello1(friend)
//undefined


//(2)함수 표현식
const hello = function(name){
    alert(name + '님 안녕')
}


//(3)화살표 함수
//함수 표현식의 변형 방법
const hello = (name) =>{
    alert(name + '님 안녕')
}




//---내장함수---
/* 
자주 사용되는 함수를 자바스크립트에 내장하여
편리하게 이용할 수 있도록 한 것
*/
/*
1.시간지연 함수
setTimeout(func, time)

2.시간반복 함수
setInterval(func, time)

-시간 입력 시 ms(밀리세컨드) 단위로 입력
-1초에 1000ms 로 계산
*/

setTimeout(function(){
    console.log("hi")
},3000)

setInterval(function(){
console.log("1초가 지났다")
},1000)


setInterval(function(){
    console.log(time)
    time = time - 1
},1000)
//-->>마이너스의 경우를 제외시켜주어야 함

let time = 10
//undefined

setInterval(function(){

    if(time >= 0){
    console.log(time)
    time = time - 1
    }
    
},1000)


let time1 = 180
//undefined

setInterval(function(){
    
    if(time1 >= 0) {

        const min = Math.floor(time1 / 60)
        let sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time1 = time1 - 1
    }
        
},1000)
//-->> 3:0 과 같은 경우를 정상적으로 나오도록 수정하였음
//3:00
//2:59
