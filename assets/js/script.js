document
  .getElementById("increament")
  .addEventListener("click", handleIncrement);

document
  .getElementById("decreament")
  .addEventListener("click", handleDecreament);

document.getElementById("resetBtn").addEventListener("click", handleReset);

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

function handleReset() {
  counterValue = 0;
  updateCounterDispaly();
}
