//---- join-form input창에 text 입력됐을 때 active
//input value 값이 하나라도 있을 때 active 클래스 생성
// -> 없을 시 active 클래스 삭제
//input창 이벤트 발생했을 때 함수 실행

//active 클래스 생성.제거하는 함수
function upDateInputState(input) {
    if (input.value.trim().length > 0) {
        input.parentElement.classList.add('active');
        return true;
    }
    else {
        input.parentElement.classList.remove('active');
        return false;
    }
}


//input 이벤트 값을 가져와서
//1. upDateInputState 실행 시키는 함수
//2. input 값이 하나라도 비어있으면 join-btn disabled 실행 시키는 함수
function handleInput(e) {
    let input = e.target;
    let type = input.getAttribute("type");
    //----1
    if (type == "text") {
        idActive = upDateInputState(input);
        nameActive = upDateInputState(input);
        nickActive = upDateInputState(input);
    }
    else {
        pwActive = upDateInputState(input, pwActive);
    }

    //----2
    if (idActive && nameActive && nickActive && pwActive) {
        joinBtn.removeAttribute('disabled');
    }
    else {
        joinBtn.setAttribute('disabled', true);
    }
}

//Darkmode 버튼 눌렀을때 
function modeToggle(e) {
    e.preventDefault();

    let body = document.querySelector('body');

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeBtn.innerHTML = 'Lightmode';
    }
    else {
        modeBtn.innerHTML = 'Darkmode';
    }
}

//비밀번호 input 입력시 표시 버튼 보이기
let pwVisible = document.getElementById('pw-visible');

function pwMode(){
    //userpw type이 pw일 경우
    if(userPw.getAttribute('type') == 'password'){
        userPw.setAttribute('type', 'text');
        pwVisible.innerHTML = '숨기기';
    }
    else{
        userPw.setAttribute('type', 'password');
        pwVisible.innerHTML = '비밀번호 표시'; 
    }
}
pwVisible.addEventListener('click', pwMode);

let modeBtn = document.getElementById('mode-toggle');
modeBtn.addEventListener('click', modeToggle);


let idActive = false;
let nameActive = false;
let nickActive = false;
let pwActive = false;

let joinBtn = document.getElementById('join-btn');
let userId = document.getElementById('userid');
let userName = document.getElementById('username');
let nickName = document.getElementById('nickname');
let userPw = document.getElementById('userpw');

userId.addEventListener('keyup', handleInput);
userName.addEventListener('keyup', handleInput);
nickName.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);