const https = require("https");

const url =
  "https://api.darksky.net/forecast/20789cb14c205b66b94a49fb05d74ac7/40,-27";

const request = https.request(url, response => {
  let data = "";

  response.on("data", chunk => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", error => {
  console.log("Error:", error);
});

request.end();
