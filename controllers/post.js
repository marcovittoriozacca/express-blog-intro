const {getFile} = require('../utilities.js');

const htmlPage = (fileName, ext) => {
    const postsFile = getFile(fileName, ext);

    let html = `<ul>`;
    postsFile.forEach(({title, description, tags, img}) => {
        html += `<li>
                    <h2>${title}</h2>
                    <img width="150" src="/${img}" alt="${title}">
                    <p>${description}</p>
                `;
        tags.forEach(tag => {
            html+= `<span>${tag}</span><br>`
        })
        html += `</li>`
    });
    html += `</ul>`
    
    return html;
}

const jsonFile = (fileName, ext) => {
    const postsFile = getFile(fileName, ext);
    return postsFile;
}


const index = (req, res) => {
    res.format({
        "html": () => res.type("html").send(htmlPage('posts', 'json')),
        "json": () => res.type("json").send(jsonFile('posts', 'json'))
    })
}
module.exports = {
    index,
}