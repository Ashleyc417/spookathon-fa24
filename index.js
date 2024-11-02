// Array of top images
const topImages = [
    './top/mia-top.png',
    './top/straw-shortcake.png'
];

// Array of bottom images
const bottomImages = [
  './bottom/dorothy-bottom.png',
  './bottom/straw-shortcake.png'
];

// Array of shoe images
const shoesImages = [
  './shoes/dorothy-shoes.png',
  './shoes/straw-shortcake.png'
];

let intervalId;
let isSpinning = false;

const spinButton = document.getElementById('spinButton');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

function spin() {
    isSpinning = true;
    spinButton.textContent = "Stop"; // Button text changed to "Stop"

    intervalId = setInterval(() => {
        slot1.innerHTML = `<img src="${topImages[Math.floor(Math.random() * topImages.length)]}" alt="slot image">`;
        slot2.innerHTML = `<img src="${bottomImages[Math.floor(Math.random() * bottomImages.length)]}" alt="slot image">`;
        slot3.innerHTML = `<img src="${shoesImages[Math.floor(Math.random() * shoesImages.length)]}" alt="slot image">`;
    }, 100);
}

function stop() {
    clearInterval(intervalId);
    isSpinning = false;
    spinButton.textContent = "Spin!"; // Button text back to "Spin!"
}

spinButton.addEventListener('click', () => {
    if (!isSpinning) {
        spin(); // Start spinning if not already spinning
    } else {
        stop(); // Stop if already spinning
    }
});
