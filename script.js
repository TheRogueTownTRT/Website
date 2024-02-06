const terminalOutput = document.getElementById('output');
const terminalInput = document.getElementById('input');

terminalInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const command = terminalInput.value;
        processCommand(command);
        terminalInput.value = '';
    }
});

function processCommand(command) {
    // Implement logic to handle commands here
    // For example, you might check if the command is "about" and display information about your website
    // Or you might check if the command is "help" and display a list of available commands
    // For now, let's just echo back the command
    terminalOutput.innerHTML += '$ ' + command + '\n';
}
