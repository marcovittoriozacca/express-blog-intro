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

module.exports = {
    getPath,
    getFile,
}