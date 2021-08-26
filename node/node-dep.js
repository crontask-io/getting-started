const request = require('request');
request('https://www.google.com', function (error, response, body) {
  if(error){
    console.error(error);
    return;
  }
  console.log('statusCode:', response.statusCode);
  console.log('body:', body);
});