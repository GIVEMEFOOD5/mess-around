const rInput = document.getElementById("R");
const gInput = document.getElementById("G");
const bInput = document.getElementById("B");

setInterval(() => {
    let r = rInput.value;
    let g = gInput.value;
    let b = bInput.value;

    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    localStorage.setItem("colour", `rgb(${r}, ${g}, ${b})`);

    if (localStorage.getItem("colour") == "rgb(,,,)") {
        localStorage.setItem("colour", "black");
    }
});