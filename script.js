const arrayContainer = document.getElementById("array-container");

const generateArray = () => {
    arrayContainer.innerHTML = "";
    for(let i = 0; i < 30 ; i++){
        const barHeight = ~~(Math.random()*80)+20; // this is to calculate the random height between 20 to 100 percent.

        const arrayBar = document.createElement("div");
        arrayBar.classList.add("array-bar");
        arrayBar.style.height = `${barHeight}%`;
        arrayContainer.appendChild(arrayBar);

    }
}
const Bubble_sort = async() => {
    const bars = document.querySelectorAll(".array-bar");
    for(let i =0;i <bars.length-1;i++){
        for(let j = 0;j<bars.length; j++){
            bars[j].style.backgroundColor = "#ff6f61";
            bars[j+1].style.backgroundColor = "#ff6f61";
        }
    }
}