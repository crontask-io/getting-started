const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream("/home/user/100MB.zip");
const request = http.get("http://212.183.159.230/100MB.zip", function(response) {
  response.pipe(file);
});