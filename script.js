// Select elements
const terminalOutput = document.getElementById('output');
const terminalInput = document.getElementById('input');

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
    switch (command.toLowerCase()) {
        case '/collection':
            terminalOutput.innerHTML += '<p>There are 100 NFTs in the collection.</p>';
            break;
        case '/discord':
            terminalOutput.innerHTML += '<p>Here is the official Discord link: <a href="https://discord.gg/your-discord-link" target="_blank">https://discord.gg/your-discord-link</a></p>';
            break;
        default:
            terminalOutput.innerHTML += '<p>Command not recognized. Please try again.</p>';
            break;
    }

    // Scroll to the bottom of the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}
