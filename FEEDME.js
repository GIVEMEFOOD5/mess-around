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

    counter();

    // Set a timeout to remove the inline styles after 5 seconds
    setTimeout(function() {
        foodElement.removeAttribute("style");
    }, 5000); // 5000 milliseconds = 5 seconds
}


function count() {
    let functionCallCount = 0;
    return function() {
        functionCallCount++;

        var duckyOpinion = document.getElementById('ducky');

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