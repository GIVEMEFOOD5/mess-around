//going to make the beans on toast move basses on if different buttons are pressed.

document.onmousemove = (e) => {
    const image = document.createElement("img");
    image.src = "beansontoast1.png";
    image.style.position = "absolute";
    image.style.left = `${e.clientX}px`;
    image.style.top = `${e.clientY}px`;

    image.style.transition = "0.25s ease";

    document.body.appendChild(image);

    setTimeout(() => {
        image.style.opacity = "0";
        image.style.filter = "blur(5px)";
    }, 500);

    setTimeout(() => {
        image.remove();
    }, 750);
}