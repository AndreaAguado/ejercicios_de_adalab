const fs = require('fs');

const readFile = (fileName, callback) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log('Error:', err);
        } else {
            callback(data);
        }
    });
};

const writeFile = (fileName, fileContent, callback) => {
    fs.writeFile(fileName, fileContent, err => {
        if (err) {
            console.log('Error:', err);
        } else {
            callback();
        }
    });
};

readFile('./input-file.json', fileContent => {
    // const content = JSON.parse(fileContent);
    const content = fileContent;
    const newFileContent = `${content}`;
    writeFile('./output-file.json', newFileContent, () => {
        console.log('The file has been copied!');
    });
});