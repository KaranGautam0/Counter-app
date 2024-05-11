document
  .getElementById("increament")
  .addEventListener("click", handleIncrement);

document
  .getElementById("decreament")
  .addEventListener("click", handleDecreament);
let counterDisplay = document.getElementById("couter-display");
let counterValue = 0;

function updateCounterDispaly() {
  counterDisplay.textContent = counterValue;
}

function handleIncrement() {
  counterValue++;
  updateCounterDispaly();
}

function handleDecreament() {
  if (counterValue > 0) {
    counterValue--;
    updateCounterDispaly();
  }
}
