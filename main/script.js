let optionBtn = document.querySelectorAll('.option-btn');
let optionPopup = document.querySelector('.more-option');
let optionCloseBtn = document.querySelector('option-close-btn');

//option-btn 버튼 클릭 시
//more-option -> active 클래스 생성/ 제거
function popupOpen(item){
  item.classList.add('active');
}

function popupClose(item){
  item.classList.remove('active');
}

// popupOpen 함수 매개변수 X
// 매개변수가 없을 경우 => click 이벤트가 발생했을 때 해당 함수 호출
// postAddBtn.addEventListener('click', popupOpen);

// 매개변수가 있을 경우 => () => { popupOpen(매개변수) }

optionBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    popupOpen(optionPopup)
  })
})

optionCloseBtn.addEventListener('click', () => {popupClose(optionPopup)})