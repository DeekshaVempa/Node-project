const fs = require('fs');
//readfiles
//reads file and fires the error function
//aysnchronus if teh function takes more time it doesnot wait and completes other instruction
fs.readFile('./blog1.txt',(err, data) =>{
  if(err){
    console.log(err);
  }
  console.log(data.toString() );
});

console.log('last line');
//write
fs.writeFile('./blog1.txt','Hello deeksha how are you?', () => {
console.log('file was written')
});

//directories
fs.mkdir('./assets', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Folder created')

});


//delete