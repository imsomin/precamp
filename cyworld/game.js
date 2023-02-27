//끝말잇기 로직
/*
1. 단어를 입력하고 버튼을 누른다 : onclick
2. input 태그의 값을 읽는다 : document.getElementById("word").value ->변수에 할당
3. 제시어의 끝 글자와 입력값의 첫 글자를 비교한다
: 제시어의 끝 글자를 변수에 할당 then 입력값의 첫 글자를 변수에 할당 then 조건문 사용하여 비교
4. 제시어의 끝 글자와 입력값의 첫 글자가 같으면 결과란에 '정답입니다'를 표시하고, 제시어를 입력값으로 변경한다.
5. 제시어의 끝 글자와 입력값의 첫 글자가 다르면 결과란에 '땡'을 표시하고 제시어는 변경하지 않는다
*/

const startWord = () => {
    let myword = document.getElementById("myword").value
    //value : 값이 직접 입력되는 경우
    let word = document.getElementById("word").innerText
    //innerText : 내용을 가져오는 경우

    let lastword = word[word.length - 1]
    //배열 또는 문자열은 인덱스는 0부터 시작, 길이는 1부터 시작하므로 -1 이 필요하다

    let firstword = myword[0]

    if(firstword === lastword){
        //정답일 경우
        document.getElementById("result").innerText = "정답입니다!"
        //정답입니다! 로 재할당

        document.getElementById("word").innerText = myword
        //기존 워드를 마이 워드로 재할당

        document.getElementById("myword").value = ""
        //단어 입력창 초기화
    } else {
        //오답일 경우
        document.getElementById("result").innerText = "땡!"
        document.getElementById("myword").value = ""
        //단어 입력창 초기화

    }

}