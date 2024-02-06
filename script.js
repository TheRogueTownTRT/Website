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
            terminalOutput.innerHTML += '<p>There are 333 NFTs in The Rogue Town main collection.</p>';
            break;
        case '/discord':
            terminalOutput.innerHTML += '<p>Here is the official Discord link: <a href="https://discord.gg/P6aeYwKMsw" target="_blank">https://discord.gg/P6aeYwKMsw</a></p>';
            break;
        default:
            terminalOutput.innerHTML += '<p>Command not recognized. Please try again.</p>';
            break;
    }

    // Scroll to the bottom of the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}
