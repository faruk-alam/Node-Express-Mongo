const path = require('path');

const myPath = "c:\Users\onecr\Desktop\Node Express Mongo\node-js\global-variable.js"

const pathInf0 = {
    fileName: path.basename(myPath),
    folderName: path.dirname(myPath),
    fileExtension: path.extname(myPath),
    absoluteOrNot: path.isAbsolute(myPath),
    detailInfo: path.parse(myPath),
}
console.log(pathInf0);
