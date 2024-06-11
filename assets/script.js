//darkmode 클릭했을때
//onclick 이벤트 발생 -> 다크모드로 변경

//객체 받아오기
let darkMode = document.getElementById('darkmode');
//let logo = document.getElementById('insta-logo');
let count = 0;

//실행할 함수만들기
//누르면 다크모드 클래스 생성 -> 반복문으로 다크모드 해제-> 클래스 삭제
darkMode.addEventListener('click', (e) => {
    count++;
    e.preventDefault();

    console.log(count);

    if(count % 2 != 0){
        document.body.classList.add('dark');

    }
    else{
        document.body.classList.remove('dark');
    }
})