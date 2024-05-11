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
  playClickSound();
}

function handleDecreament() {
  if (counterValue > 0) {
    counterValue--;
    updateCounterDispaly();
    playClickSound();
  } else {
    handleZeroValueError();
  }
}

function handleReset() {
  counterValue = 0;
  updateCounterDispaly();
  playClickSound();
}

const audioElement = document.querySelector("audio");

const playClickSound = () => {
  audioElement.src = "./assets/music/clickSound.mp3";
  audioElement.play();
};

function handleZeroValueError() {
  audioElement.src = "./assets/music/errorSong.mp3";
  audioElement.play();
}
