let array = [];
const container = document.getElementById("array-container");

function generateArray(size = 40) {
  array = [];
  container.innerHTML = "";
  for (let i = 0; i < size; i++) {
    array[i] = Math.floor(Math.random() * 200) + 20;
    const bar = document.createElement("div");
    bar.style.height = `${array[i]}px`;
    bar.classList.add("bar");
    container.appendChild(bar);
  }
}


