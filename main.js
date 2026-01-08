const btn = document.querySelector("#reset-btn");
const container = document.querySelector(".container");

function createGrid(size) {
    container.innerHTML = "";

    for (let i = 0; i < size * size; i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `calc(100% / ${size})`;
        box.style.height = `calc(100% / ${size})`;
        box.style.border = "0.5px solid grey";
        container.appendChild(box);
    }
}

createGrid(16);

btn.addEventListener("click", () => {
    const gridSize = prompt("Masukkan jumlah grid:");
    if (gridSize > 0) createGrid(gridSize);
});


container.addEventListener("mouseover", (e) => {
    if (!e.target.classList.contains("box")) return;

    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${r},${g},${b})`;

    setTimeout(() => {
        e.target.style.backgroundColor = "white";
    }, 700);
});
