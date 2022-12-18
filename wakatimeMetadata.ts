let quantityOfPages = 100;
var axios = require('axios');
const cheerio = require('cheerio');

interface attribute {
    display_type?: string,
    trait_type: string,
    value?: number | string
}

interface metadataNft {
    description: string,
    external_url: string,
    image: string,
    name: string,
    attributes: attribute[]
}

let metadataNfts: metadataNft[]

(async () => {
    for (let i = 2; i <= quantityOfPages; i++) {
        let response = await axios.get(`http://archive.org/wayback/available?url=https://wakatime.com/leaders?page=${i}`);
        let lastSnap = response.data["archived_snapshots"].closest;
        console.log(i)
        let snapDay = lastSnap.timestamp.substring(6, 8);
        if (snapDay == "17" || snapDay == "18") {
            response = await axios.get(lastSnap.url);
            const $ = cheerio.load(response.data);
            const statsTable = $("tr");
            statsTable.each((i, elem) => {
                let metaNft: metadataNft = {
                    description: "",
                    external_url: "",
                    image: "",
                    name: "",
                    attributes: []
                };
                metaNft.description = "";
                console.log($(elem).find('.langcol').text().split(",").length)
            })
        } else {
            console.log(lastSnap.url)
            console.log(`Wrong day on ${i}`)
        }
    }
})()

// (async ()=>{ 
//     console.log(await axios.get("http://web.archive.org/web/20221217175714/https://wakatime.com/leaders?page=12"))
// })()