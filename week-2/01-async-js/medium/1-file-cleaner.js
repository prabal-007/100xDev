const fs = require('fs');

function fileCleaner(filePath) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(`in read ${err}`);
            return;
        } else {
            let content = data.replace(/ \s+/g, ' ').replace(/\n\s+/g, '\n');
            console.log("cleaning.........");
            writeData(content);
        }
    });

    function writeData(data){
        fs.writeFile(filePath, data, 'utf-8', (err) => {
            if (err){
                console.log(`in write ${err}`);
            } else {
                console.log(`${filePath} has been cleaned`);
            }
        });
    }
}

let filePath = '1-file-cleaner.txt';
fileCleaner(filePath)