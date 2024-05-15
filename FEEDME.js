function feed(food) {
    var image = document.getElementById("murder-duck");

    var imageRect = image.getBoundingClientRect();

    document.getElementById(food).style.position = "absolute";
    document.getElementById(food).style.left = imageRect.left + window.scrollX + "px";
    document.getElementById(food).style.top = imageRect.top + window.scrollY + "px";

    var styles = window.getComputedStyle(document.getElementById("murder-duck", null));

    document.getElementById(food).style.width = styles.getPropertyValue("width");
    document.getElementById(food).style.height = styles.getPropertyValue("height");

    console.log(styles.getPropertyValue("width"));

    document.getElementById(food).style.transition = "5s ease";

    document.getElementById(food).style.scale = "10%";
    document.getElementById(food).style.opacity = "0";
}

