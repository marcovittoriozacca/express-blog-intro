const {getFile} = require('../utilities.js');

const index = (req, res) => {
    res.format({
        "html": () => {

            const postsFile = getFile('posts', 'json');

            let html = `<ul>`;
            postsFile.forEach(({title, description, tags, img}) => {
                html += `<li>
                            <h2>${title}</h2>
                            <img src="/${img}" alt="${title}">
                            <p>${description}</p
                        `;
                tags.forEach(tag => {
                    html+= `
                        <span>${tag}</span> <br>
                    `
                })
                html += `</li>`
            });
            html += `</ul>`
            res.type("html");
            res.send(html);
            
        }
    })
}


module.exports = {
    index,
}