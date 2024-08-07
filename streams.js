const fs = require('fs'); 

const readStream = fs.createReadStream('./docs/blog2.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog3.txt');

//on is a event listener which is a data event
readStream.on('data', (chunk)=>{
    //toString method to convert buffer to string
   console.log('--newchunk---');
   console.log(chunk);
   writeStream.write('\n New Chunk\n');
   writeStream.write(chunk);
});


//piping can also be used to transfer from readtstream to writestream
 //readStream.pipe(writeStream);