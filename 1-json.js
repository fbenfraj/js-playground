const fs = require("fs");

const dataBuffer = fs.readFileSync("./1-json.json");
const dataString = dataBuffer.toString();
const dataJSON = JSON.parse(dataString);
dataJSON.name = "Farouk";
dataJSON.age = "25";
const newDataString = JSON.stringify(dataJSON);
fs.writeFileSync("./1-json.json", newDataString);
