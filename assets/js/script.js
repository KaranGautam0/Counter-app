document
  .getElementById("increament")
  .addEventListener("click", handleIncrement);

let counterDisplay = document.getElementById("couter-display");
let counterValue = 0;

function updateCounterDispaly() {
  counterDisplay.textContent = counterValue;
}

function handleIncrement() {
  counterValue++;
  updateCounterDispaly();
}
