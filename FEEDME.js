let duckyOpinion = document.getElementById('ducky');

let feedCount = localStorage.getItem("feed-count");

let bacon = document.getElementById("bacon")

let cheese = document.getElementById("cheese")

let cookie = document.getElementById("cookie")

// Function to display the ID of the clicked element
function displayId(event) {
    // Get the ID of the clicked element
    var elementId = event.target.id.toUpperCase();

    // Display the ID in the display area
    document.getElementById('foodFed').innerText = 'MMMMM ' + elementId + '!!';
}

// Attach the click event listener to all elements with the 'clickable' class
var clickableElements = document.getElementsByClassName('feed');

if (feedCount == null) {
    feedCount = 0;
}

if (localStorage.getItem("food-count") < 10) {
    duckyOpinion.innerHTML = `IM HANGRY, FEED ME MORE!!<br><br>YOU HAS ONLY FEED ME ${feedCount} TIMES >:(!`;
}

else {
    duckyOpinion.innerHTML = `THANK YOU FOR FEEDS ME!!<br><br>YOU HAS FEEDS ME ${feedCount} TIMES :D!`;
}

function feed(food) {
    
    var image = document.getElementById("murder-duck");
    
    var foodElement = document.getElementById(food);
    
    var imageRect = image.getBoundingClientRect();
    
    foodElement.style.position = "absolute";
    foodElement.style.left = imageRect.left + window.scrollX + "px";
    foodElement.style.top = imageRect.top + window.scrollY + "px";
    
    var styles = window.getComputedStyle(image, null);
    
    foodElement.style.width = styles.getPropertyValue("width");
    foodElement.style.height = styles.getPropertyValue("height");
    foodElement.style.transition = "5s ease";
    foodElement.style.transform = "scale(0.1)";
    foodElement.style.opacity = "0";
    
    for (var i = 0; i < clickableElements.length; i++) {

        clickableElements[i].addEventListener('click', displayId);
    
    }

    counter();
   
    // Set a timeout to remove the inline styles after 5 seconds
    setTimeout(function() {
        foodElement.style.transition = "ease";
        foodElement.style.position = "";
        foodElement.style.top = "";
        foodElement.style.left = "";
        foodElement.style.width = "";
        foodElement.style.height = "";
        foodElement.style.transform = "scale(1)";

        setTimeout(() => {
            foodElement.style.transition = ""; // Reset transition property
            foodElement.style.opacity = "1";
        }, 500);
    }, 2500);
}


function count() {
    let functionCallCount = localStorage.getItem("feed-count");
    
    if (functionCallCount == null) {
        functionCallCount = 0;
    }
    
    return function() {
        functionCallCount++;

        localStorage.setItem("feed-count", functionCallCount);

        if (functionCallCount < 10) {
            duckyOpinion.innerHTML = `IM HANGRY, FEED ME MORE!!<br><br>YOU HAS ONLY FEED ME ${functionCallCount} TIMES >:(!`;
        }

        else {
            duckyOpinion.innerHTML = `THANK YOU FOR FEEDS ME!!<br><br>YOU HAS FEEDS ME ${functionCallCount} TIMES :D!`;
        }
    };
}

// Create a function with counter
const counter = count();

// reset button
function reset() {
    localStorage.removeItem("feed-count")
    location.reload();
}