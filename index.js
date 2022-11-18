let openSideMenu = document.querySelector(".open-menu-btn");
let sideMenu = document.querySelector(".side-nav");
openSideMenu.addEventListener("click", () => {
  sideMenu.classList.toggle("invisible");
});

let observer = new ResizeObserver((entries) => {
  if (entries[0].contentRect.width >= 650) {
    sideMenu.classList.add("invisible");
  }
});
observer.observe(document.body);
