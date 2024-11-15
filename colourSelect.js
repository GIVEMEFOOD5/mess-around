const rInput = document.getElementById("R");
const gInput = document.getElementById("G");
const bInput = document.getElementById("B");

setInterval(() => {
    let red = rInput.value;
    let green = gInput.value;
    let blue = bInput.value;

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    localStorage.setItem("colour", `rgb(${red}, ${green}, ${blue})`);

    if (localStorage.getItem("colour") == "rgb(,,,)") {
        localStorage.setItem("colour", "black");
    }
});