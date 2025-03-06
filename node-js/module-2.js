
// for importing all the data from module-1.js
const abc = require('./module-1');
// for importing single value from module-1.js
 const {people} = require('./module-1');


// console.log(abc);
 console.log(abc.people, abc.ages);
