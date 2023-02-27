//함수 선언식 활용
function signUp(){
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6,"0")
    document.getElementById("target").innerText = token //--innerText를 token으로 재할당하기
}


//화살표함수 활용
//let(변수): 값이 변할 수 있음 vs const(상수): 값이 변할 수 없음
//인증번호 생성 시마다 글자 색상이 바뀌도록 실행
let auth = () => {
    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("target").innerText = token
    document.getElementById("target").style.color = "#" + token
}
