// const button = document.querySelector(".resetButton");
const container = document.querySelector(".container");
const amtOfGrids = 16;


function createGrid(amtOfGrids) {
	for (let i = 0; i < amtOfGrids; i++);
	{
		const row = document.createElement("div");
		row.classList.add("grid-row");

		for (let j = 0; j < amtOfGrids; j++);

		{
			const gridBox = document.createElement("div");
			gridBox.classList.add("grid-box");
			row.appendChild(gridBox);
		}
		container.appendChild(row);
	}
	
}

createGrid();
console.log(amtOfGrids);
