const {getHtml} = require('../utilities.js');

const homePage = (fileName, ext) => {

    const page = getHtml(fileName, ext);
    return page;
}

const index = (req,res) => {
    res.send(homePage('index.html'));
}


module.exports = {
    index,
}