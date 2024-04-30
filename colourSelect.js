function updateColor() {
    var red = document.getElementById("R").value;
    var green = document.getElementById("G").value;
    var blue = document.getElementById("B").value;

    var hexColour = "#" + red + green + blue;

    var colorBox = document.getElementById("color-box");
    colorBox.style.backgroundColor = hexColour;
}

var inputs = document.querySelectorAll('input[type="text"]');
inputs.forEach(function(input) {
    input.addEventListener("input", updateColor);
});

// Initial call to set initial color
updateColor();