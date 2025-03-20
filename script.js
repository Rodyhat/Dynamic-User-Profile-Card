const button = document.querySelector("button");
const card = document.querySelector(".card");
button.addEventListener("click", random);
function random() {
const red = Math.round(Math.random() * 255)
const blue = Math.round(Math.random() * 255)
const green = Math.round(Math.random() * 255)
const randomColors = `rgb(${red}, ${blue}, ${green})`
card.style.backgroundColor = randomColors;
}
