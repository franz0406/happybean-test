const tabBtn = document.querySelectorAll('.tab_btn'); // 탭메뉴 버튼
const tabLists = document.querySelectorAll('.prod_list'); // 탭메뉴 리스트
const likeBtn = document.querySelectorAll('.like_btn'); // 좋아요 버튼

// 탭 메뉴
for( let i = 0; i < tabBtn.length; i++){ // 반복문 사용으로 모든 탭 버튼에 클릭이벤트 적용
  tabBtn[i].addEventListener('click', function(e){
    const currentTab = e.target;
    activeTab(currentTab); // activeTab 함수에 클릭한 탭 버튼 정보를 인자로 전달합니다.
    activeTabContent(currentTab); // activeTabContent 함수에 클릭한 탭 버튼 정보를 인자로 전달합니다.
  })
}

function activeTab(tab){ // 탭 활성화 함수
  for(let i = 0; i < tabBtn.length; i++) {
    tabBtn[i].setAttribute("aria-selected", "false"); // 모든 탭 버튼의 aria-selected 값을 false 로 바꿉니다.
  }
  tab.setAttribute("aria-selected", "true"); // 인자로 전달 받은 현재 클릭한 탭 버튼만 다시 true 로 바꿉니다.
}

function activeTabContent(tab){ // 탭 콘탠츠 활성화 함수
  const getId = tab.getAttribute("aria-controls"); // 인자로 전달 받은 현재 클릭한 탭 버튼의 aria-controls 의 값을 가져옵니다.
  const tabContent = document.getElementById(getId); // getId 의 값과 연결되어 있는 탭 리스트입니다.

  for(let i = 0; i < tabLists.length; i++) {
    tabLists[i].setAttribute("tabindex", "-1"); // 모든 탭 리스트의 tabindex를 "-1" 로 바꿉니다.
  }
  tabContent.setAttribute("tabindex", "0"); // 연결 되어있는 탭 리스트만 다시 "0" 바꿉니다.
}

// 좋아요 토글 버튼.
for( let i = 0; i < likeBtn.length; i++) {
  likeBtn[i].addEventListener('click', function(e){
    const btnTarget = e.target;
    const isPressed = btnTarget.getAttribute("aria-pressed");
    if(isPressed === "false"){
      btnTarget.setAttribute("aria-pressed", "true");
    } else {
      btnTarget.setAttribute("aria-pressed", "false");
    }
  });
}
