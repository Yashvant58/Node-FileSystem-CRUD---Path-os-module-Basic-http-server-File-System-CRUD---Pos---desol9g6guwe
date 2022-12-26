

const fs = require('fs/promises')

const myFileWriter = fs.writeFile('File.txt', 'Hello',(err)=> {
	// write code here
	console.log("file created with hello ");

	// dont chnage function name
});

const myFileReader = fs.readFile ("File.txt","utf-8",(err,data) => {
	console.log(data);
	// write code here
	// dont chnage function name
});


const myFileUpdater = fs.appendFile("File.txt", " World",() => {
	// write code here
	console.log("printing world");
	// dont chnage function name
});

const myFileDeleter = fs.unlink("File.txt",() => {
	// write code here
	console.log("file deleted");
	// dont chnage function name
});
 module.exports = { myFileWriter, myFileReader, myFileUpdater, myFileDeleter}