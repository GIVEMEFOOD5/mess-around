document.onmousemove = (e) => {
    const image = document.createElement("img");
    image.src = "unicorn1.png";
    image.style.position = "absolute";
    image.style.left = `${e.clientX}px`;
    image.style.top = `${e.clientY}px`;

    document.body.appendChild(image);

    setTimeout(() => {
        image.remove();
    }, 500);
}

// Get the button element
const button = document.getElementById('myButton');

// Add event listener for mousemove event
document.addEventListener('mousemove', function(e) {
    // Calculate distance between cursor and button
    const buttonRect = button.getBoundingClientRect();
    const cursorX = e.clientX;
    const cursorY = e.clientY;
    const distanceX = Math.abs(cursorX - (buttonRect.left + buttonRect.width / 2));
    const distanceY = Math.abs(cursorY - (buttonRect.top + buttonRect.height / 2));
    const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

    // Adjust cursor size based on distance
    const maxDistance = 200; // Adjust as needed
    const scaleFactor = 1 - Math.min(distance / maxDistance, 1);
    const newSize = 20 + 20 * scaleFactor; // Adjust initial cursor size and scaling factor as needed

    // Apply new cursor size
    document.body.style.setProperty('cursor', `url('cursor.png') ${newSize}px ${newSize}px, auto`);
});