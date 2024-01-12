const fs = require('fs');

function readFile(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log(data);
        }
    });
}

function testIt() {
    console.log('this is 2 --->');
}

filePath = '3-read-from-file.md';
readFile(filePath);

// setTimeout(() => {
//     readFile(filePath)
// }, 1000);


setTimeout(() => {
    testIt()
}, 1000);

console.log("Hello from timeout");