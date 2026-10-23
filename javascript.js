const gridSize = document.querySelector("#gridSize");
const gridSubmit = document.querySelector("#gridSubmit");
const reset = document.querySelector("#reset");
const container = document.querySelector(".container");

gridSubmit.addEventListener("click", createGrid);
reset.addEventListener("click", clear);

function createGrid() {
    let row = [];
    let box = [];

    if (Number(gridSize.value) <= 0 
    || Number(gridSize.value) > 100) {
        alert("Invalid input! (Usage: 0 < integer < 100");
        return;
    }
    if (!Number.isInteger(Number(gridSize.value))) {
        alert("Invalid input! (Usage: 0 < integer < 100");
        return;
    }
    
    const rows = document.querySelectorAll(".box-row");
    rows.forEach(row => {
        row.remove();
    });

    for (let i = 0; i < gridSize.valueAsNumber; i++) {
        row[i] = document.createElement("div");
        row[i].classList.add("box-row");
        container.appendChild(row[i]);
        for (let j = 0; j < gridSize.valueAsNumber; j++) {
            box[j] = document.createElement("div");
            box[j].classList.add("box");
            row[i].appendChild(box[j]);
        }
    }

    container.addEventListener("mouseover", (event) => {
        if (event.target.classList.contains("box")) {
            event.target.classList.add("box-hover");
        }
    })
}

function clear() {
    const boxes = document.querySelectorAll(".box");
    
    boxes.forEach(box => {
        box.classList.remove("box-hover");
    })
}

