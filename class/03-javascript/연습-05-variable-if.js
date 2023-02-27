//산술 연산자의 경우
//연산이 알관되게 수행되지 않으므로
//문자와 숫자 주의해서 작성할 것

//데이터타입 연산자 실습
1 + 1
//2
1 + "만원"
//'1만원'
1 + "1"
//'11'
1 - "1"
//0
"코드"+"캠프"
//'코드캠프'
"123" == 123
//true
"123" === 123
//false
true && true
//true
true && false
//false
true || false
//true
!false
//true
!true
//false


//조건문 실습 1
if(1+1 === 2){
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
//정답입니다
undefined
if(true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
//정답입니다
undefined
if(!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
//틀렸습니다
undefined
if(0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
//틀렸습니다
undefined
if(1) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
//정답입니다



//코드 최적화로
//progile.age <=19 를 적을 필요는 없다
//유저가 -1 등 예외적인 수를 적을 가능성 고려

//조건문 실습 2
const profile = {
    name:"철수", age: 12, school: "다람쥐초등학교"
}

if(profile.age>=20){
    console.log("성인입니다")
}else if(profile.age >=8){
    console.log("학생입니다")
}else if(profile.age > 0) {
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다")
}
//학생입니다

