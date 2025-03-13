const fs = require('fs');
// fs.mkdir('./docu', (err) => {
//     if (err) throw err;
//     console.log('Directory created');
// // });
//  // reading files 
//  fs.readFile('./docu/file.txt',(err, data) => {
//      if(err) {
//             console.log(err);
//      }
//      console.log(data.toString());
//  })
//  console.log("last line of code"); 
//  // this will run first because of async nature of nodejs

//  // writing files
//     fs.writeFile('./docu/file.txt', 'Hello, World!', () => {
//         console.log('File written to...');
//     });

    // directories
    // fs.mkdir('./docu/subfolder', (err) => {
    //     if(err){
    //         console.log(err);}
    //     console.log('Folder created...');
    // });
    // using exitsSync method 
    // if(!fs.existsSync('./docu/subfolder')){
    //     fs.mkdir('./docu/subfolder', (err) => {
    //         if(err){
    //             console.log(err);
    //         }
    //         console.log('Folder deleted...');
    //     });
    // }
    //     else{
    //         fs.rmdir('./docu/subfolder', (err) => {
    //             if(err){
    //                 console.log(err);
    //             }
    //             console.log('Folder deleted...');
    //     });
    // }
    // const newData = "this is my new file-2";
    // fs.writeFile('./docu/file-2.txt', newData, () => {
    //     console.log('File written to...');
    // });

    // renaming files
    // fs.rename('./docu/file-2.txt', './docu/file-1.txt', (err) => {
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log('File renamed');
    // });

    // deleting files
    if(fs.existsSync('./docu/file-1.txt')){
        fs.unlink('./docu/file-1.txt', (err) => {
            if(err){
                console.log(err);
            }
            console.log('File deleted successfully.');
        });
    }
    else{
        console.log('File does not exist');
    }