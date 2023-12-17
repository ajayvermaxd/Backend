// Import the 'fs' (file system) module to work with file-related operations
const fs = require("fs");

// Specify the file path for the biodata.txt file
const filePath = "biodata.txt";

// Display a separator to distinguish output
console.log("*****************");

// try {
//     // Synchronously read the content of the file using 'readFile'
//     // This method is synchronous, so it blocks further execution until the file is read
//     const fileContent = fs.readFile(filePath, 'utf8');
    
//     // Log the content of the file
//     console.log(fileContent);
// } catch (err) {
//     // Handle errors if any occur during the synchronous file reading
//     console.error(err.message);
// }

// Asynchronously read the content of the file using 'readFile'
// This method is asynchronous, and a callback function is provided to handle the result or error
fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
        // Handle errors if any occur during the asynchronous file reading
        console.error(err);
        return;
    }
    // Log the content of the file
    console.log(data);
});

// Asynchronously write content to a new file named 'output.txt' using 'writeFile'
fs.writeFile("output.txt", "Hello", (err) => {
    if (err) {
        // Handle errors if any occur during the file writing process
        console.error(err);
        return;
    }
    // Log a message when the data is successfully written to the file
    console.log("Data updated ");
});

// Asynchronously append content to an existing file named 'output.txt' using 'appendFile'
fs.appendFile("output.txt", "There", (err) => {
    if (err) {
        // Handle errors if any occur during the file appending process
        console.error(err);
        return;
    }
    // Log a message when the data is successfully appended to the file
    console.log("Data updated ");
});
