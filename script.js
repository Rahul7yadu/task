// script.js
document.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      // Remove 'expanded' class from all boxes
      boxes.forEach((b) => b.classList.remove("expanded"));
      boxes.forEach((b) => {
        const option = b.querySelector(".options-wrapper");
        option.classList.remove("show");
        console.log(option);
      });
      // Add 'expanded' class to the clicked box
      box.classList.add("expanded");
      const options = box.querySelector(".options-wrapper");
      options.classList.add("show");
      //   console.log(options);
    });
  });
});
