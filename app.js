const sections = document.querySelectorAll(".section");
const webBtns = document.querySelector(".web-btns");
const secBtn = document.querySelectorAll(".web-btn");
const body = document.querySelector(".main-content");

// move between section and add some classes
secBtn.forEach((e) => {
  e.onclick = () => {
    //add btn-active to the clicked btn
    if (e.classList.contains("btn-active")) {
      e.classList.remove("btn-active");
    } else {
      secBtn.forEach((ele) => {
        ele.classList.remove("btn-active");
      });
      e.classList.add("btn-active");
    }
    //add active class to the clicked btn that mention the exact section
    sections.forEach((section) => {
      if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
      const id = e.dataset.id;
      const element = document.getElementById(id);
      element.classList.add("active");
    });
  };
});

document.querySelector(".theme-btn").addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
});
