let elements = document.querySelectorAll(".question");
let elem_ques = document.querySelectorAll(".question p");

elements.forEach((elem) =>
  elem.addEventListener("click", () => {
    // selecting the question of
    let question = elem.firstElementChild;
    let arrow = elem.querySelector("img");

    // elem_ques.forEach((e) => {
    //   e.classList.remove("open");
    // });

    if (question.classList.contains("open") === true) {
      arrow.style.transform = "rotate(0deg)";
      elem.nextElementSibling.style.height = "0em";
    } else {
      arrow.style.transform = "rotate(180deg)";

      elem.nextElementSibling.style.height = "3em";
    }
    // adding the class open to clicked element;
    question.classList.toggle("open");
  })
);
