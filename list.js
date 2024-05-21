let sections = [[]]; // Start with an initial empty section

document.getElementById('title').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addItem();
        event.preventDefault(); // Prevent the default action (form submission)
    }
});

function addItem() {
    const inputField = document.getElementById('title');
    const textArea = document.getElementById('list');
    const inputValue = inputField.value.trim();

    if (inputValue) {
        if (inputValue.toUpperCase() === 'NEW') {
            sections.push([]); // Start a new section
        } else {
            sections[sections.length - 1].push(inputValue); // Add item to the current section
        }
        updateTextArea();
    }

    inputField.value = ''; // Clear the input field
    inputField.focus(); // Focus back on the input field
}

function updateTextArea() {
    const textArea = document.getElementById('list');
    const text = sections.map(section => section.join('\n')).join('\n\n=== NEW SECTION ===\n\n');
    textArea.value = text;
}
