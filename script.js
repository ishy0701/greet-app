const greetInput = document.getElementById("greetInput");
const greetList = document.getElementById("greetList");

// Load saved greet from localStorage
window.onload = () => {
  const saved = JSON.parse(localStorage.getItem("greet")) || [];
  saved.forEach(greet => displaygreet(greet));
};

function addgreet() {
  const text = greetInput.value.trim();
  if (text === "") return alert("Please write something!");

  displaygreet(text);

  // Save to localStorage
  let greet = JSON.parse(localStorage.getItem("greet")) || [];
  greet.push(text);
  localStorage.setItem("greet", JSON.stringify(greet));

  greetInput.value = "";
}

function displaygreet(text) {
  const li = document.createElement("li");
  li.textContent = text;
  greetList.appendChild(li);
}
