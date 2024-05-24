const path = require('path');
const fs = require('fs');

//returns the path of the given file
const getPath = (fileName, ext ) => {
    const pathName = path.join(__dirname, 'database', `${fileName}.${ext}`);
    return pathName;
}

//returns the parsed file
const getFile = (fileName, ext) => {
    const filePath = getPath(fileName, ext);
    const getFile = fs.readFileSync(filePath);

    const parsedFile = JSON.parse(getFile);

    return parsedFile;
}

const writeFile = (fileName, ext, data) => {
    const filePath = getPath(fileName, ext);
    const parsedFile = getFile(fileName, ext);
    const updateData = [...parsedFile, data];
    console.log(updateData);
    const string = JSON.stringify(updateData);
    fs.writeFileSync(filePath, string);
}

module.exports = {
    getPath,
    getFile,
    writeFile,
}