const container = document.getElementById("Container");
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = 0.4;
  return `rgba(${r}, ${g}, ${b},${a})`;
}
function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 400 / size;
  for (let i = 1; i <= size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    container.appendChild(square);
  }
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
      const randomColor = getRandomRGB();
      square.style.backgroundColor = randomColor;
    });
  });
}
createGrid(10);
const resizeButton = document.getElementById("resize-grid");
resizeButton.addEventListener("click", () => {
  let newSize = prompt("Enter the number of squares per side (maximum 20):");
  newSize = parseInt(newSize);

  if (newSize && newSize > 0 && newSize <= 20) {
    createGrid(newSize);
  } else {
    alert("Please enter a valid number between 1 and 20");
  }
});
