// 모금정보 탭 메뉴
const fundraisingTab = document.querySelector('.fundraising_tab'),
      fundraisingTabBtns = fundraisingTab.querySelectorAll('button[role="tab"]'),
      fundraisingTabContents = fundraisingTab.querySelectorAll('.tab_item');

for(let i = 0; i < fundraisingTabBtns.length; i++) {
  fundraisingTabBtns[i].addEventListener('click', function(e){
    const currentTab = e.target;
    activeTab(currentTab, fundraisingTabBtns);
    activeTabContent(currentTab, fundraisingTabContents);
  })
}

// 결제기부 탭 메뉴
const donateTab = document.querySelector('.donation_tab'),
      donateTabBtns = donateTab.querySelectorAll('button[role="tab"]'),
      donateTabContents = donateTab.querySelectorAll('.tab_item');

for(let i = 0; i < donateTabBtns.length; i++) {
  donateTabBtns[i].addEventListener('click', function(e){
    const currentTab = e.target;
    activeTab(currentTab, donateTabBtns); 
    activeTabContent(currentTab, donateTabContents);
  })
}

function activeTab(tab, tabBtns){
  for(let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].setAttribute("aria-selected", "false");
  }
  tab.setAttribute("aria-selected", "true");
}

function activeTabContent(tab, tabItems){
  const getId = tab.getAttribute("aria-controls");
  const tabContent = document.getElementById(getId);

  for(let i = 0; i < tabItems.length; i++) {
    tabItems[i].setAttribute("tabindex", "-1");
  }
  tabContent.setAttribute("tabindex", "0");
}

// 모금함 상세정보
const donateDetailContainer = document.querySelector('.donation_details'),
      donateDetailBtn = donateDetailContainer.querySelector('button');
    
donateDetailBtn.addEventListener('click', function(e){
  const target = e.target;
  const getContentId = target.getAttribute('aria-controls');
  const ariaExpanded = target.getAttribute('aria-expanded');
  const contents = document.getElementById(getContentId);

  if(ariaExpanded == "true"){
    target.setAttribute('aria-expanded', "false");
    contents.setAttribute('tabindex', "-1");
  } else {
    target.setAttribute('aria-expanded', "true");
    contents.setAttribute('tabindex', "0");
  }
})

// 이미지 슬라이더
var imageSwiper = new Swiper(".image_swiper", {
  slidesPerView: "auto",
  spaceBetween: 10,
});