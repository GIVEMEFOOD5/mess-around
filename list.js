let sections = [[]]; // Start with an initial empty section

document.addEventListener('DOMContentLoaded', function() {
    function handleKeyPress(event, callback) {
        if (event.key === 'Enter') {
            callback();
            event.preventDefault();
        }
    }

    const titleElement = document.getElementById('title');
    if (titleElement) {
        titleElement.addEventListener('keypress', function(event) {
            handleKeyPress(event, addItemTitle)
        });
    }

    const headElement = document.getElementById('header');
    if (headElement) {
        headElement.addEventListener('keypress', function(event) {
            handleKeyPress(event, addItemHead)
        });
    }

    const miniElement = document.getElementById('mini');
    if (miniElement) {
        miniElement.addEventListener('keypress', function(event) {
            handleKeyPress(event, addItemMini)
        });
    }
})

function addItemTitle() {
    const inputField = document.getElementById('title');
    const textArea = document.getElementById('list');
    const inputValue = inputField.value.trim();

    if (inputValue) {
        if (inputValue.toUpperCase() === 'NEW') {
            sections.push([]); // Start a new section
        } else {
            const outputValue = `${inputValue}
            `;

            sections[sections.length - 1].push(outputValue); // Add item to the current section
            updateTextArea();
        
            inputField.value = ''; // Clear the input field
            inputField.focus(); // Focus back on the input field
        }
        updateTextArea();
    }

    inputField.value = ''; // Clear the input field
    inputField.focus(); // Focus back on the input field
}



function addItemHead() {
    const inputField = document.getElementById('header');
    const textArea = document.getElementById('list');
    const inputValue = inputField.value.trim();

    const outputValue = `   ${inputValue}
    `;

    sections[sections.length - 1].push(outputValue); // Add item to the current section
    updateTextArea();

    inputField.value = ''; // Clear the input field
    inputField.focus(); // Focus back on the input field
}

function addItemMini() {
    const inputField = document.getElementById('mini');
    const textArea = document.getElementById('list');
    const inputValue = inputField.value.trim();

    const outputValue = `       ${inputValue}
    `;

    sections[sections.length - 1].push(outputValue); // Add item to the current section
    updateTextArea();

    inputField.value = ''; // Clear the input field
    inputField.focus(); // Focus back on the input field
}

function updateTextArea() {
    const textArea = document.getElementById('list');
    const text = sections.map(section => section.join('\n')).join('\n\n=== NEW SECTION ===\n\n');
    textArea.value = text;
}

var textarea = document.querySelector('textarea');

document.getElementById('show').addEventListener('click', function() {
    autosize(textarea);
  });

textarea.addEventListener('keydown', autosize);
             
function autosize(el) {
  setTimeout(function() {
    el.style.cssText = 'height:auto; padding:0';
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
  },0);
}

var textPlace = document.getElementById('list');

setInterval(() => {
    if (textPlace.value != "") {
        localStorage.setItem("saveList", textPlace.value); 
    }
});

var showing = document.getElementById('showing');

showing.value = localStorage.getItem("saveList");

autosize(showing);
