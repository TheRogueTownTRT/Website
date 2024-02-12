// Select elements
const terminalOutput = document.getElementById('output');
const terminalInput = document.getElementById('input');

// Initial welcome message
terminalOutput.innerHTML = '<p>Welcome to The Rogue Town\'s Terminal Website! Type <span class="command">/commands</span> to interact:</p>';

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
        case '/addtodo':
            if (isAuthorized()) {
                addTodo();
            } else {
                terminalOutput.innerHTML += '<p>Unauthorized to use this command.</p>';
            }
            break;
        case '/removetodo':
            if (isAuthorized()) {
                removeTodo();
            } else {
                terminalOutput.innerHTML += '<p>Unauthorized to use this command.</p>';
            }
            break;
        case '/markdone':
            if (isAuthorized()) {
                markTodoAsDone();
            } else {
                terminalOutput.innerHTML += '<p>Unauthorized to use this command.</p>';
            }
            break;
        default:
            terminalOutput.innerHTML += '<p>Command not recognized. Type "/commands" to see available commands.</p>';
            break;
    }

    // Scroll to the bottom of the terminal output
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Function to check if the user is authorized (replace this with your own logic)
function isAuthorized() {
    // You can add your logic here to check if the user is authorized.
    // For now, let's assume you're the only one authorized.
    // Replace this logic with a more robust authentication system.
    return true; // Assuming you're always authorized for now.
}

// Function to add a todo item
function addTodo() {
    const todoItem = prompt("Enter todo item:");
    if (todoItem) {
        // Retrieve existing todo list from local storage or initialize an empty array
        const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
        // Add the new todo item to the list
        todoList.push(todoItem);
        // Save the updated todo list to local storage
        localStorage.setItem('todoList', JSON.stringify(todoList));
        // Display success message
        terminalOutput.innerHTML += '<p>Todo item added.</p>';
    }
}

// Function to remove a todo item
function removeTodo() {
    // Retrieve existing todo list from local storage or initialize an empty array
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    if (todoList.length > 0) {
        const index = prompt("Enter the index of the todo item to remove:");
        if (index && !isNaN(index) && index >= 1 && index <= todoList.length) {
            // Remove the todo item at the specified index
            todoList.splice(index - 1, 1);
            // Save the updated todo list to local storage
            localStorage.setItem('todoList', JSON.stringify(todoList));
            // Display success message
            terminalOutput.innerHTML += '<p>Todo item removed.</p>';
        } else {
            terminalOutput.innerHTML += '<p>Invalid input. Please enter a valid index.</p>';
        }
    } else {
        terminalOutput.innerHTML += '<p>No todos found.</p>';
    }
}

// Function to mark a todo item as done
function markTodoAsDone() {
    // Retrieve existing todo list from local storage or initialize an empty array
    const todoList = JSON.parse(localStorage.getItem('todoList')) || [];
    if (todoList.length > 0) {
        const index = prompt("Enter the index of the todo item to mark as done:");
        if (index && !isNaN(index) && index >= 1 && index <= todoList.length) {
            // Update the todo item at the specified index
            todoList[index - 1] = "[x] " + todoList[index - 1];
            // Save the updated todo list to local storage
            localStorage.setItem('todoList', JSON.stringify(todoList));
            // Display success message
            terminalOutput.innerHTML += '<p>Todo item marked as done.</p>';
        } else {
            terminalOutput.innerHTML += '<p>Invalid input. Please enter a valid index.</p>';
        }
    } else {
        terminalOutput.innerHTML += '<p>No todos found.</p>';
    }
}

// Function to display available commands
function displayCommands() {
    terminalOutput.innerHTML += '<p>Available commands:</p>';
    terminalOutput.innerHTML += '<ul>';
    terminalOutput.innerHTML += '<li>/collection - Gives the amount of NFTs in the collection</li>';
    terminalOutput.innerHTML += '<li>/discord - Gives the official Discord link</li>';
    terminalOutput.innerHTML += '<li>/todo - Displays the todo list</li>';
    terminalOutput.innerHTML += '<li>/addtodo - Adds a todo item</li>';
    terminalOutput.innerHTML += '<li>/removetodo - Removes a todo item</li>';
    terminalOutput.innerHTML += '<li>/markdone - Marks a todo item as done</li>';
    terminalOutput.innerHTML += '<li>/commands - Shows available commands</li>';
    // Add more commands as needed
    terminalOutput.innerHTML += '</ul>';
}
