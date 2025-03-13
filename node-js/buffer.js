const fs = require('fs');

// Creating a buffer

const readStream = fs.createReadStream('./docu/blogs.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docu/blog-2.txt');
// readStream.on('data', (chunk) => {
//     console.log('---NEW CHUNK---');
//     console.log(chunk);
//     writeStream.write('\n------------------NEW CHUNK-------------------\n');
//     writeStream.write(chunk);
// });
readStream.pipe(writeStream);
