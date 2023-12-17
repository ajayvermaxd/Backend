// Import the 'fs' (file system) module to work with file-related operations
const fs = require("fs");

// Import the 'csv-parser' module to parse CSV data
const csv = require("csv-parser");

// Define the path to the CSV file
const filename = "./demo.csv";

// Create an empty array to store the result of parsing the CSV file
const result = [];

// Create a read stream for the CSV file, pipe it through the csv-parser
// Each row of data is pushed into the 'result' array during the 'data' event
// The 'end' event is triggered when the entire CSV file has been processed
// The 'error' event is triggered if there's an error during the process
fs.createReadStream(filename)
    .pipe(csv())
    .on("data", (data) => {
        // Push each row of data into the 'result' array
        result.push(data);
    })
    .on("end", () => {
        // Log a message when the CSV file has been successfully processed
        console.log("CSV file processed");

        // Log the parsed data stored in the 'result' array
        console.log(result);
    })
    .on("error", (error) => {
        // Log an error message if there's an error during the process
        console.error("Error reading the message", error.message);
    });
