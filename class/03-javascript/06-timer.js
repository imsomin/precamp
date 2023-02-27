let isStarted = false;
//타이머가 작동 중인 경우, 또 다시 타이머 실행이 되지 않도록 작업

let auth = () => {
    
    
    if(isStarted === false){
        //타이머가 작동 중이 아닐 때
        
        isStarted = true
        //true가 되면서 작동 시작
        document.getElementById("finish").disabled = false
        //인증 번호 활성화
        
        const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
        document.getElementById("target").innerText = token
        document.getElementById("target").style.color = "#" + token
    
        let time = 10
        let timer
    
        timer = setInterval(function(){
    
            if(time >= 0){
                const min = Math.floor(time / 60)
                let sec = String(time % 60).padStart(2, "0")
                document.getElementById("timer").innerText = min + ":" + sec
                time = time - 1
            } else {
                document.getElementById("finish").disabled = true
                isStarted = false
                
                console.log("타이머 작동중") 
                //타이머 작동중이면 콘솔 찍히도록 작업
                //위의 인증완료 버튼 비활성화와 타이머 비작동 상태가
                //1초마다 실행되고 있음
                // ↓
                clearInterval(timer)
                //어떤 변수(timer)에 재할당될 때 setInterval 함수가 제대로 작동된다고 할수있음
                //clearInterval로 timer을 삭제시켜 줌(할당을 풀어줌)
            }
    
        },1000)
    } else{
        //타이머가 작동 중일 때

        //(+) alt 키 누르고 방향키 누르면 위 아래로 이동 가능~!
    }
    
    

}
