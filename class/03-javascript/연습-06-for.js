//반복문
//초기식 :반복문의 시작점을 만들어 주는 것 어디부터 카운트 시작? 
//조건식 :반복문의 끝점을 만들어 줌
//증감문 :카운트를 어떻게 할 것인가

/*for(초기식;조건식;증감문){
    반복해서 실행할 내용
}
*/
//반복문 루프가 돌때마다
//i에 i+1을 재할당해주겠다
for(let i=0; i<5; i=i+1){
    console.log("hello")
}
/*
반복(i를 0부터 시작;i가 5보다 작을때까지만;한번 반복할때마다 i에1을 더함'){
    콘솔에 로그를 남김("안녕")
}
*/
//const는 재할당이 안되므로 반드시 let 사용할 것

//1씩 점진적으로 증가할 경우
for(let count=0; count<5; count++){
    console.log("hello")
}

//특정 조건 만족 시
//조건식을 통한 정상 종료 이전에도 종료 가능
//명령문을 실행하지 않고 다음 반복으로 건너뛰기 가능

//배열에 데이터가 앞으로 얼마나 들어올지 가늠 못하는 상황
//length 입력
const children = ["철수", "영희", "훈이"]

for(let i=0; i<3; i++){
    console.log(children[i] + "입니다")
}
//철수입니다
//영희입니다
//훈이입니다

for(let i=0; i<4; i++){
    console.log(children[i] + "입니다")
}
//철수입니다
//영희입니다
//훈이입니다
//undefined입니다

for(let i=0; i<children.length; i++){
    console.log(children[i] + "입니다")
}
//철수입니다
//영희입니다
//훈이입니다



//실습
let persons = [
    {name:"철수", age: 17},
    {name:"영희", age: 22},
    {name:"도우너", age:5},
    {name:"그루트", age:65},
    {name:"도비", age:3}
    ]

for(let count=0; count < persons.length; count++){

    if(persons[count].age >= 19) {
        console.log("성인입니다")
    } else {
        console.log("미성년자입니다")
    }
}
/*
미성년자입니다
성인입니다
미성년자입니다
성인입니다
미성년자입니다
*/

for(let count=0; count < persons.length; count++){

    if(persons[count].age >= 19) {
        console.log(persons[count].name+"님은 성인입니다")
    } else {
        console.log(persons[count].name+"님은 미성년자입니다")
    }
}
/*
철수님은 미성년자입니다
영희님은 성인입니다
도우너님은 미성년자입니다
그루트님은 성인입니다
도비님은 미성년자입니다
*/




//퀴즈
const fruits = [
    {number:1, title:"레드향"},
    {number:2, title:"샤인머스켓"},
    {number:3, title:"산청딸기"},
    {number:4, title:"한라봉"},
    {number:5, title:"사과"},
    {number:6, title:"애플망고"},
    {number:7, title:"딸기"},
    {number:8, title:"천혜향"},
    {number:9, title:"과일선물세트"},
    {number:10, title:"귤"}
   ]

for(let i=0; i<fruits.length; i++){
    if(fruits[i].number){
        console.log(fruits[i].number + " " + fruits[i].title)
    } else {
        console.log("더이상 결과가 없습니다")
    }
}
/*
1 레드향
2 샤인머스켓
3 산청딸기
4 한라봉
5 사과
6 애플망고
7 딸기
8 천혜향
9 과일선물세트
10 귤
*/

for(let i=0; i<fruits.length; i++){
    if(fruits[i].number){
        console.log(`${fruits[i].number} ${fruits[i].title}`)
    } else {
        console.log("더이상 결과가 없습니다")
    }
}
/*
1 레드향
2 샤인머스켓
3 산청딸기
4 한라봉
5 사과
6 애플망고
7 딸기
8 천혜향
9 과일선물세트
10 귤
*/


for(let i=0; i<fruits.length; i++){
    if(fruits[i].number){
        console.log(`과일 차트 ${fruits[i].number}위는 ${fruits[i].title}입니다`)
    } else {
        console.log("더이상 결과가 없습니다")
    }
}
/*
과일 차트 1위는 레드향입니다
과일 차트 2위는 샤인머스켓입니다
과일 차트 3위는 산청딸기입니다
과일 차트 4위는 한라봉입니다
과일 차트 5위는 사과입니다
과일 차트 6위는 애플망고입니다
과일 차트 7위는 딸기입니다
과일 차트 8위는 천혜향입니다
과일 차트 9위는 과일선물세트입니다
과일 차트 10위는 귤입니다
*/