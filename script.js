const heartBtn = document.getElementById("heartBtn");
const startScreen = document.getElementById("startScreen");
const greetScreen = document.getElementById("greetScreen");

heartBtn.addEventListener("click", () => {
  startScreen.classList.add("hidden");
  greetScreen.classList.remove("hidden");
});