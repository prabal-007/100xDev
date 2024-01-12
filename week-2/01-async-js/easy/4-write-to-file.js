const fs = require('fs');

function writeToFile(content) {
    fs.writeFile(filePath, content, 'utf-8', (err) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(`Data written to file: ${filePath}`);
        }
    });
}

function testIt() {
    console.log('this is 2 --->');
}

let filePath = '4-write-to-file-test.md';
// let content = "Hello World";
let content = `This is a test for the NodeJS module fs.\n\rI hope it works!`;

writeToFile(content);

setTimeout(() => {
    testIt()
}, 7);

console.log("is it ok");
