function upDateInputState(input, activeVar){
  //trim() 공백 제거
  //공백 제거한 value 값의 길이가 0보다 클 때
  if(input.value.trim().length > 0){
    input.parentElement.classList.add('active');
    activeVar = true;
  } 
  else{
    //value 값의 길이가 없을 때
    input.parentElement.classList.remove('active');
    activeVar = false;
  }
  return activeVar;
}


let userId = document.getElementById('userid');
let userPw = document.getElementById('userpw');
//console.log(userId, userPw);

let idActive = false;
let pwActive = false;
// let idActive = pwActive = false;

let submitBtn = document.getElementById('submit-btn');

function handleInput(e){
  //e.target => 이벤트가 일어나는 대상
  let input = e.target;
  //input의 ()속성을 가져옴
  let type = input.getAttribute("type");
  // console.log(type);/·///

  if(type == "text"){
    idActive = upDateInputState(input, idActive);
  }
  else{
    pwActive = upDateInputState(input, pwActive);
  }

  //id, pw 값이 하나라도 비어있으면 disabled 처리
  if(idActive && pwActive){
    submitBtn.removeAttribute('disabled');
  }
  else{
    submitBtn.setAttribute('disabled', true);
  }
}

userId.addEventListener('keyup', handleInput);
userPw.addEventListener('keyup', handleInput);