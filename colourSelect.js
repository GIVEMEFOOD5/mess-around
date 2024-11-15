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
  
function getforeGColor(rgb) {
    var cols = rgb.match(/^rgb\((\d+), \s*(\d+), \s*(\d+)\)$/);
    var b = 1;
    var rValue = cols[1];
    var gValue = cols[2];
    var bValue = cols[3];
    var rV = Math.floor((255 - rValue) * b);
    var gV = Math.floor((255 - gValue) * b);
    var bV = Math.floor((255 - bValue) * b);
    return 'rgb(' + rV + ', ' + gV + ', ' + bV + ')';
}



function setColor() {
    rgbValue[0] = rInput.value;
    rgbValue[1] = gInput.value;
    rgbValue[2] = bInput.value;
    var color = Math.round(((parseInt(rgbValue[0]) * 299) + (parseInt(rgbValue[1]) * 587) + (parseInt(rgbValue[2]) * 114)) / 1000);
    var backColor = 'rgb(' + rgbValue[0] + ', ' + rgbValue[1] + ', ' + rgbValue[2] + ')';
      
    var textColor = getforeGColor(backColor);
    $('.heading').css('color', textColor);
    $('.heading').css('border-color', textColor);
    $('.container').css('color', textColor);
    $('.btncard').css('color', textColor);
    $('.input').css('color', textColor);
    $('.button').css('border-color', textColor);
}

setColor();