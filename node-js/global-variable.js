//console.log(global);
console.log(__dirname);
console.log(__filename);
setTimeout(() => {
    console.log("In the timeout");
    clearTimeout(int);
}, 3000);
const int = setInterval(() => {
    console.log("In the interval")
}, 1000);

// Define a global variable in NodeJS
global.myVariable = 'This is a global variable';

// Access the global variable
console.log(myVariable); //