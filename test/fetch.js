const fetch = require('node-fetch');
const cheerio = require("cheerio");

var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    timeout: 5000
};

fetch("https://www.alexa.com/siteinfo/nownews.com", requestOptions)
    .then(response => response.text())
    .then(result => {
        // console.log(result)
        let $ = cheerio.load(result);
        let globlaRank = $('div.rank-global > div > div > p.big.data').text();
        console.log(globlaRank)
    })
    .catch(error => console.log('error', error));