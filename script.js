const paletteContainer = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function generateRandomColor() {
  const hex = Math.floor(Math.random() * 16777215).toString(16);
  return `#${hex.padStart(6, "0")}`;
}

function generatePalette() {
  paletteContainer.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const color = generateRandomColor();
    const colorDiv = document.createElement("div");
    colorDiv.classList.add("color");
    colorDiv.style.background = color;

    const hexText = document.createElement("span");
    hexText.classList.add("hex");
    hexText.textContent = color;

    hexText.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      hexText.textContent = "Copied!";
      setTimeout(() => (hexText.textContent = color), 1000);
    });

    colorDiv.appendChild(hexText);
    paletteContainer.appendChild(colorDiv);
  }

  // Save last palette to localStorage
  localStorage.setItem("lastPalette", paletteContainer.innerHTML);
}

if (localStorage.getItem("lastPalette")) {
  paletteContainer.innerHTML = localStorage.getItem("lastPalette");
} else {
  generatePalette();
}

generateBtn.addEventListener("click", generatePalette);
