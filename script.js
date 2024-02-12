// Select elements
const terminalOutput = document.getElementById('output');
const terminalInput = document.getElementById('input');

// Initial welcome message
terminalOutput.innerHTML = '<p>Welcome to The Rogue Town\'s Terminal Website! Type commands to interact:</p>';

// Event listener for user input
terminalInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim(); // Get the entered command
        if (command.startsWith('/')) {
            executeCommand(command); // Execute the command if it starts with '/'
        } else {
            terminalOutput.innerHTML += '<br>'; // Otherwise, skip a line
        }
        terminalInput.value = ''; // Clear the input field
    }
});

// Function to execute commands
function executeCommand(command) {
    // Display the entered command in the terminal output
    terminalOutput.innerHTML += '<p>$ ' + command + '</p>';

    // Check the command and provide a response
    switch (command.toLowerCase().trim()) { // Convert to lowercase and trim whitespace
        case '/collection':
            terminalOutput.innerHTML += '<p>There are 333 NFTs in the collection.</p>';
            break;
        case '/discord':
            terminalOutput.innerHTML += '<p>Here is the official Discord link: <a href="https://discord.gg/P6aeYwKMsw" target="_blank">https://discord.gg/P6aeYwKMsw</a></p>';
            break;
        case '/commands':
            displayCommands();
            break;
        case '/todo':
            displayTodoList();
            break;
        default:
            terminalOutput.innerHTML += '<p>Command not recognized. Type "/commands" to see available commands.</p>';
            break;
    }

    // Scroll to the bottom of the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Function to display available commands
function displayCommands() {
    terminalOutput.innerHTML += '<p>Available commands:</p>';
    terminalOutput.innerHTML += '<ul>';
    terminalOutput.innerHTML += '<li>/collection - Gives the amount of NFTs in the collection</li>';
    terminalOutput.innerHTML += '<li>/discord - Gives the official Discord link</li>';
    terminalOutput.innerHTML += '<li>/todo - Displays the todo list</li>';
    terminalOutput.innerHTML += '<li>/commands - Shows available commands</li>';
    // Add more commands as needed
    terminalOutput.innerHTML += '</ul>';
}

// Function to display the todo list
function displayTodoList() {
    // Retrieve todo list from local storage
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];

    // Display todo list
    if (todoList.length > 0) {
        terminalOutput.innerHTML += '<p>Todo List:</p>';
        terminalOutput.innerHTML += '<ul>';
        todoList.forEach((item, index) => {
            terminalOutput.innerHTML += `<li>${index + 1}. ${item}</li>`;
        });
        terminalOutput.innerHTML += '</ul>';
    } else {
        terminalOutput.innerHTML += '<p>No todos found.</p>';
    }
}
