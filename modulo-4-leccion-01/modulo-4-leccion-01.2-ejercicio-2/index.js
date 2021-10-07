const fs = require('fs');

const myObject = {
    user: "Mari Carmen",
    email: "mari@gmail.com",
    age: 28,
};

console.log(myObject);

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

readFile('./index.js', fileContent => {
    const content = JSON.stringify(myObject);
    const newFileContent = `${content}`;
    writeFile('./output.txt', newFileContent, () => {
        console.log('The file has been copied!');
    });
});