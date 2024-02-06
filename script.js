// Select elements
const terminalOutput = document.getElementById('output');
const terminalInput = document.getElementById('input');

// Initial welcome message
terminalOutput.innerHTML = '<p>Welcome to The Rogue Town\'s Terminal Website! Type commands to interact:</p>';

// Event listener for user input
terminalInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value.trim(); // Get the entered command
        executeCommand(command); // Execute the command
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
        default:
            terminalOutput.innerHTML += '<p>/collection /discord</p>';
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
    terminalOutput.innerHTML += '<li>/commands - Shows available commands</li>';
    // Add more commands as needed
    terminalOutput.innerHTML += '</ul>';
}
