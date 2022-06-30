"use strict";

const launchDate = new Date().setDate(new Date().getDate() + 14);
let previousTimeBetweenDates;

setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((launchDate - currentDate) / 1000);

  runCountdown(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

const runCountdown = function (time) {
  const days = Math.floor(time / 86400);
  let seconds = time % 86400;
  const hours = Math.floor(seconds / 3600);
  seconds = seconds % 3600;
  const mins = Math.floor(seconds / 60);
  seconds = seconds % 60;

  flip(document.querySelector("[data-days]"), days);
  flip(document.querySelector("[data-hours]"), hours);
  flip(document.querySelector("[data-minutes]"), mins);
  flip(document.querySelector("[data-seconds]"), seconds);
};

const flip = function (flipCard, newNumber) {
  const topHalf = flipCard.querySelector(".flipcard__top");
  const bottomHalf = flipCard.querySelector(".flipcard__bottom");

  const startNumber = parseInt(topHalf.textContent);
  if (newNumber === startNumber) return;

  const topFlip = document.createElement("div");
  topFlip.classList.add("top-flip");
  const bottomFlip = document.createElement("div");
  bottomFlip.classList.add("bottom-flip");

  topFlip.textContent = startNumber.toString().padStart(2, "0");
  bottomFlip.textContent = newNumber.toString().padStart(2, "0"); // 90deg to 0deg

  topFlip.addEventListener("animationstart", () => {
    topHalf.textContent = newNumber.toString().padStart(2, "0");
  });

  topFlip.addEventListener("animationend", () => {
    topFlip.remove(); // removes topFlip div from DOM
  });

  bottomFlip.addEventListener("animationend", () => {
    bottomHalf.textContent = newNumber.toString().padStart(2, "0");
    bottomFlip.remove(); // removes bottomFlip div from DOM
  });

  flipCard.append(topFlip, bottomFlip);
};
