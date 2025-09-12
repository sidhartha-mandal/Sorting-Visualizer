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
async function swap(el1, el2) {
  return new Promise(resolve => {
    setTimeout(() => {
      let temp = el1.style.height;
      el1.style.height = el2.style.height;
      el2.style.height = temp;
      resolve();
    }, 45);
  });
}
// Bubble Sort
async function bubble_Sort() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < bars.length; i++) {
    for (let j = 0; j < bars.length - i - 1; j++) {
      bars[j].style.background = "red";
      bars[j + 1].style.background = "red";
      if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
        await swap(bars[j], bars[j + 1]);
      }
      bars[j].style.background = "#17a2b8";
      bars[j + 1].style.background = "#17a2b8";
    }
    bars[bars.length - i - 1].style.background = "green";
  }
}
generateArray();

