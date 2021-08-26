const fs = require('fs');
try {
  fs.unlinkSync("/home/user/100MB.zip");  
} catch(e){
  console.error(e);
}

try {
  fs.unlinkSync("/home/user/20MB.zip");  
} catch(e){
  console.error(e);
}