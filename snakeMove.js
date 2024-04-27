document.addEventListener("keydown", (e) => {
    const image = document.createElement("img");
    image.src = "unicorn1.png";
    image.style.position = "absolute";

    const bodyWidth = document.body.clientWidth;
    const bodyHeight = document.body.clientHeight;

    image.style.width = `${bodyWidth}px`;
    image.style.height = `${bodyHeight}px`;

    let left = parseInt(image.style.left) || 0;
    let top = parseInt(image.style.top) || 0;

    const moveSpeed = 10; // Adjust this value to change the speed of movement

    switch (e.key) {
        case "ArrowLeft":
            left -= moveSpeed;
            break;
        case "ArrowRight":
            left += moveSpeed;
            break;
        case "ArrowUp":
            top -= moveSpeed;
            break;
        case "ArrowDown":
            top += moveSpeed;
            break;
        default:
            return; // Do nothing if other keys are pressed
    }

    // Ensure the image does not move out of bounds
    left = Math.max(0, Math.min(left, bodyWidth - parseInt(image.style.width)));
    top = Math.max(0, Math.min(top, bodyHeight - parseInt(image.style.height)));

    image.style.left = `${left}px`;
    image.style.top = `${top}px`;

    document.body.appendChild(image);

    image.style.transition = "0.25s ease";

    setTimeout(() => {
        image.style.opacity = "0";
        image.style.filter = "blur(5px)";
    }, 500);

    setTimeout(() => {
        image.remove();
    }, 750);
});
