const fs = require("fs");
const filename = "demo.json";
fs.readFile(filename, "utf8", (err, data) => {
  if (err) {
    console.error("error reading the file ", err.message);
    return;
  }
  try {
    const jsondata = JSON.parse(data);
    console.log("file sucessfully read");
    console.log(jsondata);
  } catch (parseError) {
    console.error(parseError.message);
  }
});
