const GRIDSIDE = 600;
let squaresPerSide = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;

function setBackgroundColor() {
	this.style.backgroundColor = "black";
}

function createGridCells() {
	const numofSquares = squaresPerSide * squaresPerSide;
	const widthOrHeight = `${GRIDSIDE / squaresPerSide - 2}px`;

	for (let i = 0; i < numofSquares; i++) {
		const gridCell = document.createElement("div");
		gridCell.style.width = `${GRIDSIDE / cols - 2}px`;
		gridCell.style.height = `${GRIDSIDE / rows - 2}px`;
		gridCell.classList.add("cell");

		sketchArea.appendChild(gridCell);

		gridCell.addEventListener("mouseover", setBackgroundColor);
	}
}
createGridCells();
