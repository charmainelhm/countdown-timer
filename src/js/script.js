"use strict";

const flipCard = document.querySelector(".flipcard");
const topHalf = flipCard.querySelector(".flipcard__top");
const bottomHalf = flipCard.querySelector(".flipcard__bottom");
// const topFlip = document.createElement("div");
// const bottomFlip = document.createElement("div");

const flip = function () {
  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");
  const startNumber = parseInt(topHalf.textContent);

  topHalf.textContent = startNumber;
  bottomHalf.textContent = startNumber;
  topFlip.textContent = startNumber;
  bottomFlip.textContent = startNumber - 1; // 90deg to 0deg

  topFlip.addEventListener("animationstart", () => {
    topHalf.textContent = startNumber - 1;
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove(); // removes topFlip div from DOM
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.textContent = startNumber - 1;
    bottomFlip.remove(); // removes bottomFlip div from DOM
  });

  flipCard.append(topFlip, bottomFlip);
};

flip();
