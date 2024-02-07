const button = document.querySelector(".resetButton");
const container = document.querySelector(".container");

const createGrid = amtOfGrids => {
	for (let i = 0; i < amtOfGrids; i++);
	{
		const row = document.createElement("div");
		row.classList.add("grid-row");

		for (let j = 0; i < amtOfGrids; j++);
		{
			const gridBox = document.createElement("div");
			row.appendChild(gridBox);
		}
	}
};
