function upDateInputState(input, activeVar) {
  //trim() 공백 제거
  //공백 제거한 value 값의 길이가 0보다 클 때
  // -> 사용자가 input창에 입력한 값이 하나라도 있는지
  if (input.value.trim().length > 0) {
    input.parentElement.classList.add('active');
    activeVar = true;
  }
  else {
    //value 값의 길이가 없을 때
    input.parentElement.classList.remove('active');
    activeVar = false;
  }

  //return : 해당 함수가 실행된 후 함수 호출한 위치로 전달되는 값
  return activeVar; //true, false
}


let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');
//console.log(userId, userPw);

let idActive = false;
let pwActive = false;
// let idActive = pwActive = false;

let submitBtn = document.getElementById('submit-btn');

function handleInput(e) {
  //e.target => 이벤트가 일어나는 대상
  let input = e.target;


  //input의 ()속성을 가져옴
  let type = input.getAttribute("type");

  if (type == "text") {
    idActive = upDateInputState(input, idActive); //retrun값 true, false
  }
  else {
    //type이 text가 아닐 경우 -> password 
    pwActive = upDateInputState(input, pwActive);
  }


  //id, pw 값이 하나라도 비어있으면 disabled 처리
  if (idActive && pwActive) {
    // idActive랑 pwActive가 모두 참 일때 -> input.value.length > 0
    submitBtn.removeAttribute('disabled');
  }
  else {
    //idAtive나 pwActive 둘 중 하나라도 false일 때
    submitBtn.setAttribute('disabled', true);
  }
}

userId.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);


//비밀번호 인풋 입력후 숨기기,보이기 변경
let pwVisible = document.getElementById('pw-visible');

function pwMode() {
  // userpw의 type이 password일 경우
  if (userPw.getAttribute('type') == 'password') {
    //1. 비밀번호 표시 클릭 => userpw(input) type => text로 변경
    userPw.setAttribute('type', 'text');

    //2. pwVisible.innerHTML => '숨기기'로 변경
    pwVisible.innerHTML = '숨기기';
  }

  else {
    // userpw의 type이 text일 경우
    //1. 숨기기 => userpw type => password로 변경
    userPw.setAttribute('type', 'password');

    //2. pwVisible.innerHTML => '비밀번호표시'로 변경
    pwVisible.innerHTML = '비밀번호표시';
  }
}

pwVisible.addEventListener('click', pwMode);



//Darkmod/ Lightmode
let modeBtn = document.getElementById('mode-toggle');


function modeToggle(e) {
  e.preventDefault();

  //1. body 태그에 dark라는 class toggle
  // dark라는 class가 있으면 remove, 없으면 add

  let body = document.querySelector('body');
  body.classList.toggle('dark');
  
  if (body.classList.contains('dark')) {
    //body에 dark라는 클래스가 있을 때
    modeBtn.innerHTML = 'Lightmode';
  }
  else{
  //body에 dark라는 클래스가 없을 때
    modeBtn.innerHTML = 'Darkmode';
  }


  //삼항 연산자
  //사용법 =>   조건 ? 참일 때 : 거짓일 때
  //modeBtn.innerHtML = body.classList.contains('dark') ? 'Lightmode' : 'Darkmode';
}

modeBtn.addEventListener('click', modeToggle);