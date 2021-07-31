const fetch = require('node-fetch');
const cheerio = require("cheerio");
async function test() {

    let test = await fetch('https://www.alexa.com/siteinfo/nownews.com', {
            timeout: 5000
        })
        .then((res) => {
            return res.text();
        })
        .then((body) => {

            let $ = cheerio.load(body);
            let globlaRank = $('div.rank-global > div > div > p.big.data').text();
            let countryRank = '';
            $('ul.container > li').each(function() {
                if ($(this).text().split(' ')[1] == "Taiwan") {
                    countryRank = $(this).text().split(' ')[2]
                }
            });
            globlaRank = globlaRank.split('#')[1].replace(/(\n|\t|\s+)/g, "");
            countryRank = countryRank.split('#')[1];
            // console.log(globlaRank)
            // console.log(countryRank)
            var a = []
            a.push(globlaRank, countryRank)

            return a;
        });
    console.log(test)
}
test()