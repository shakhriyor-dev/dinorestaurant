const img = document.querySelectorAll(".img-tab");
const tabContent = document.querySelectorAll(".tab-content");
const tabLinks = document.querySelectorAll(".tab-link-btn");
const tabBefore = document.querySelectorAll(".js-before");

tabBefore[0].classList.add('show-line-desktop')
tabLinks[0].classList.add('active-btn')

tabLinks.forEach((element, index) => {
  element.addEventListener("click", () => {
    hideTabContent(element);
    showTabContent(index);
  });
});
function hideTabContent(e) {
  if (e !== tabLinks[0]) {
    tabContent[0].classList.add("hide");
    img[0].classList.add("hide");
  }
  tabContent.forEach((item) => {
    item.classList.remove("show");
  });
  img.forEach((item) => {
    item.classList.remove("show");
  });
  tabBefore.forEach((item) => {
    item.classList.remove("show-line-desktop");
  });
  tabLinks.forEach((item) => {
    item.classList.remove("active-btn");
  });
}
function showTabContent(index) {
  tabContent[index].classList.add("show");
  img[index].classList.add("show");
  tabBefore[index].classList.add("show-line-desktop");
  tabLinks[index].classList.add("active-btn");
}
