// Function to generate a random hexadecimal color
function getRandomHexColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to change background color
function changeColor() {
    document.body.style.backgroundColor = getRandomHexColor();
}

// Function to start flashing colors
function startFlashing() {
    if (confirm("Flashing lights?")) {
        // Flash colors every 1 milliseconds
        flashingInterval = setInterval(changeColor, 1);
        // Stop flashing after 5 seconds (5000 milliseconds)
        setTimeout(function() {
            clearInterval(flashingInterval);
            
            document.body.style.backgroundColor = "black";
        }, 5000);
    }
}