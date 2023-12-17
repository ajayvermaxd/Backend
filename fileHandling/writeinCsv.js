// write data in csv

const fs = require("fs");
const csv = require("fast-csv");
const filename = "test.csv";
const data = [{ name: "Ajay", Age: 27, Salary: 1000 },
{ Name: "Vijay", Age: 28, Salary: 2000 }];

const ws = fs.createWriteStream(fileName);
csv
    .write(data, { headers: true })
    .pipe(ws)
    .on("end", () => {
        console.log("csv file written succesfully");
    })
    .on("error", (error) => {
        console.error("error reading the file", error.message);
    });



