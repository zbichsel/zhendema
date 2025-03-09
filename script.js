var buttonEl = document.getElementById("button");

buttonEl.addEventListener("click", function() {
    const grid = document.querySelector('.grid');

    let arr1 = ["你好", "你叫什么名字？", "你喜欢一杯热咖啡还是冰茶？", "我爱你！"];
    let arr2 = ["Hello", "What is your name?", "Do you like a hot cup of coffee or iced tea?", "I love you!"];
    // Use a nested for loop to create the grid cells
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            cell.innerText = `${arr1[i]}\n${arr2[j]}`;
            cell.style.border = "1px solid black";
            cell.style.backgroundColor = "lightgray";
            cell.style.margin = "5px";
            cell.style.padding = "10px";
            cell.style.fontSize = "14px";
            cell.style.fontFamily = "Poppins, sans-serif";
            cell.style.textAlign = "center";
            cell.style.width = "150px";
            cell.style.height = "150px";
            cell.style.justifyContent = "center";
            cell.style.alignItems = "center";
            cell.style.display = "flex";
            buttonEl.style.display = "none";
        }
    }
});