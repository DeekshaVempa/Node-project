//console.log(global);


global.setTimeout(() => {
    console.log('print time out');
    clearInterval(int);
},3000);

const int = setInterval(() => {
    console.log('function runs');
},1000);

console.log(__dirname);
console.log(__filename);