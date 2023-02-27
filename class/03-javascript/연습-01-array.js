//※배열
//한번에 모두 담을 수 있음
//인덱스는 0부터 세고, 길이는 1부터 센다


//배열의 길이 ▶ array.length
//배열 값 꺼내기 ▶ array[숫자(인덱스)]
//배열 맨 뒤에 값 추가 ▶ array.push()
//배열 맨 마지막 값 삭제 ▶ array.pop()
//배열 요소 정렬 ▶ array.sort()
//배열 데이터 확인 ▶ array.includes(값)
//배열 2개 연결 ▶ array.concat(array2)
//배열을 문자로 만들기 ▶ array.join()
//배열 분리 ▶ array.slice()
//배열에서 원하는 요소 뽑기 ▶ array.filter()
//배열의 모든 요소 변경 ▶ array.map()


//문자열도 배열처럼 다룰 수 있다
const email = "codecamp@gmail.com"
email[0] = "c"
email[1] = "o"


//오늘의 단축키
//1)콘솔창에서
//방향키 ↑ ▶ 바로 전에 입력한 코드 복사
//shift+enter ▶ 줄바꿈
//2)VSCode에서
//다중 선택 ▶ 선택할 요소 드래그 후 ctrl+D 누른 후 같은 값 마우스 클릭


//배열은 객체(object,{})의 한 종류
//null vs undefined
//값이 없음 null ▶ 값이 없음을 직접 입력했다
//값이 정해지지 않음 undefined ▶ 컴퓨터가 값이 없음을 알려준다




let classmates = ["chulsu", "young", "hun"]
// undefined

classmates
//(3) ['chulsu', 'young', 'hun']

classmates[0]
//'chulsu'

classmates[1]
//'young'

classmates.includes("hun")
//true

classmates.length
//3

classmates.push("mang")


classmates
//(4) ['chulsu', 'young', 'hun', 'mang']

classmates.includes("mang")
//true

classmates.pop()
//'mang'

classmates.length
//3

classmates
//(3) ['chulsu', 'young', 'hun']


//퀴즈
//developer 라는 변수를 만들고
//자신이 원하는 개발자로의 성공 키워드가 5개 담겨있는 배열 할당 뒤
//가장 중요하다고 생각하는 키워드를 index를 이용하여 콘솔 표시
let developer
//undefined

developer = ["끈기", "의지", "체력", "동기", "동료"]
//(5) ['끈기', '의지', '체력', '동기', '동료']

console.log(developer[2])
//체력

let dream

dream = ["커리어점프", "성공", "할수있다"]

developer.concat(dream)
//(8) ['끈기', '의지', '체력', '동기', '동료', '커리어점프', '성공', '할수있다']

let result
//undefined

result = developer.concat(dream)
//(8) ['끈기', '의지', '체력', '동기', '동료', '커리어점프', '성공', '할수있다']