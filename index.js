
const form = document.querySelector("form");
const output = document.getElementById("output");
const number = document.getElementById("number");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    output.innerHTML = "";
    const inputValue = number.value.trim();
    // console.log("number", number.value);

    if (!inputValue || isNaN(inputValue)) {
        alert("Please enter a valid number!");
        return;
    }

    if(number.value < 1) {
        alert("Please enter a number greater than 0!");
        return
    }

    const heading = document.createElement("h6");
    heading.innerHTML = `Multiplication Table of ${number.value}`;
    output.appendChild(heading);

    for (let i = 0; i < 10; i++) {
        const row = document.createElement("div");
        row.classList.add("row_style");
        row.innerHTML = `${number.value} * ${i + 1} = ${number.value * (i + 1)}`;
        output.appendChild(row);
    }
    
})

