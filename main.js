let items = document.querySelectorAll(".slider-item");
console.log(items);

const leftArrow = document.querySelector(".left-icon");
const rightArrow = document.querySelector(".right-icon");

let sliderWrapper = document.querySelector(".slider-wrapper");
let sliderItems = document.querySelectorAll(".slider-item");
console.log(sliderWrapper.style.transform);

let count = 0;

function countCheck(count) {
  console.log("count", count, items.length - 1);
  if (count >= 0) {
    leftArrow.style.zIndex = "-10";
    leftArrow.style.opacity = "0";
  } else {
    leftArrow.style.zIndex = "0";
    leftArrow.style.opacity = "1";
  }
  if (-count == items.length - 1) {
    rightArrow.style.zIndex = "-10";
    rightArrow.style.opacity = "0";
  } else {
    rightArrow.style.zIndex = "0";
    rightArrow.style.opacity = "1";
  }
}
countCheck(count);

rightArrow.addEventListener("click", function () {
  console.log("right");

  count = count - 1;
  sliderWrapper.style.transform = `translateX(${count * 100}%)`;

  countCheck(count);
  return count;
});

leftArrow.addEventListener("click", function () {
  console.log("left");

  count = count + 1;
  sliderWrapper.style.transform = `translateX(${count * 100}%)`;

  countCheck(count);
  return count;
});