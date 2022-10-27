const logo = document.querySelector(".logo");
const navbar = document.querySelector(".navbar");
const box = document.querySelector(".box");

const tl = new TimelineMax();

tl.fromTo(logo, 2, {opacity: 0}, {opacity: 1}, "2");
tl.fromTo(navbar, 2, {opacity: 0}, {opacity: 1}, "2");
tl.fromTo(box, 2, {opacity: 0}, {opacity: 1}, "2");