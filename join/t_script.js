let joinBtn = document.getElementById('join-btn');
let animateInput = document.querySelectorAll('.animate-input');

let emailAct = nameAct = idAct = pwAct = false;

let userEmail = document.getElementById('user-email');
let userName = document.getElementById('user-name');
let userId = document.getElementById('user-id');
let userPw = document.getElementById('user-pw');

let pwBtn = document.getElementById('pw-btn');

function upDateInputState(val, activeVar) {
  if (val.value.trim().length > 0) {
    //animate-input에 active class add
    val.parentElement.classList.add('active');
    activeVar = true;
  }
  else {
    //animate-input에 active class remove
    val.parentElement.classList.remove('active');
    activeVar = false;
  }
  return activeVar;
}

//animateInput 반복해서 input태그 모두 가져오기
animateInput.forEach((item) => {
  let input = item.querySelector('input');

  //keyup 이벤트 발생한 태그만 실행
  input.addEventListener('keyup', () => {
    if (input == userEmail) {
      emailAct = upDateInputState(input, emailAct);
    }
    else if (input == userName) {
      nameAct = upDateInputState(input, nameAct);
    }
    else if (input == userId) {
      idAct = upDateInputState(input, idAct);
    }
    else if (input == userPw) {
      pwAct = upDateInputState(input, pwAct);
    }


    let allTrue = emailAct && nameAct && idAct && pwAct;

    if (allTrue) {
      //allTrue 안 값이 모두 참일 때
      //joinBtn disabled 속성 remove
      joinBtn.removeAttribute('disabled');

      //j-Query에서는 .attr('disabled', true/false);
      //vanilla Js에서는 속성 제거할 때 false X | removeAttribute() 사용!
      //joinBtn.setAttribute('disabled', false);
    }
    else {
      joinBtn.setAttribute('disabled', true);
    }
  })
})

function modeToggle() {
  //삼항연산자
  //조건 ? true : false

  let pwType = userPw.getAttribute('type') == 'password';
  //---> console.log(pwType);

  //userPw의 type password => text
  userPw.setAttribute('type', pwType ? 'text' : 'password');

  //pwBtn.innerHTML = '숨기기';
  pwBtn.innerHTML = pwType ? '숨기기' : '비밀번호 표시';

}
pwBtn.addEventListener('click', modeToggle);