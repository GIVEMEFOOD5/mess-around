function getHexColor() {
    var letters ='0123456789ABCDEF';
    var color = '#';
    for (var i =0; i < 6; i++) {
        color += letters[Math.floor(math.random() * 16)];
    }
    return color;
}