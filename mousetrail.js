document.onmousemove = (e) => {
    const image = document.createElement("img");
    image.src = "unicorn1.png";
    image.style.position = "absolute";
    image.style.left = `${e.clientX}px`;
    image.style.top = `${e.clientY}px`;

    image.style.animation = `unicorn${Math.floor(Math.random() * 5)} 1s ease forwards`;

    image.style.transition = "0.25s ease";

    document.body.appendChild(image);

    const link = document.getElementById('find');

    // Calculate distance between cursor and link
    const linkRect = link.getBoundingClientRect();
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    const distanceX = Math.abs(cursorX - (linkRect.left + linkRect.width / 2));
    const distanceY = Math.abs(cursorY - (linkRect.top + linkRect.height / 2));
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Adjust cursor size based on distance
    const maxDistance = 700; // Adjust as needed
    const scaleFactor = 1 - Math.min(distance / maxDistance, 1);
    const newSize = 20 + 20 * scaleFactor; // Adjust initial cursor size and scaling factor as needed

    // Apply new cursor size
    image.style.width = `${newSize* 2}px`;
    image.style.height = `${newSize * 2}px`;

    setTimeout(() => {
        image.style.opacity = "0";
        image.style.filter = "blur(5px)";
    }, 500);

    setTimeout(() => {
        image.remove();
    }, 750);
}

const btn = document.getElementById("find");

const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");

setInterval(() => {
    btn.style.top = `${Math.floor((Math.random() * 700) + 1)}px`;
    btn.style.left = `${Math.floor((Math.random() * 700) + 1)}px`;

    img0.style.top = `${Number(btn.style.top.replace("px", "")) + 10}px`;
    img0.style.left = `${Number(btn.style.left.replace("px", "")) + 10}px`;
    img0.style.filter = "invert()";

    img1.style.top = Math.floor((Math.random() * 700) + 1) + "px";
    img1.style.left = Math.floor((Math.random() * 700) + 1) + "px";
    img2.style.top = Math.floor((Math.random() * 700) + 1) + "px";
    img2.style.left = Math.floor((Math.random() * 700) + 1) + "px";
    img3.style.top = Math.floor((Math.random() * 700) + 1) + "px";
    img3.style.left = Math.floor((Math.random() * 700) + 1) + "px";
}, 1000);
