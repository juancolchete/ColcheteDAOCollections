let quantityOfPages = 100;
let maxAvgMinutes = 16 * 60 + 39;
let maxCodeMinutes = 116 * 60 + 39;
let maxRanking = 10000;
var axios = require('axios');
const cheerio = require('cheerio');
import FileLib from "./FileLib";
let collectionDescription = "This NFT collection represent a big conquer of Juan Colchete, the global top 1 on WakaTime ranking, every person on this leaderboard is represented by a NFT, tribute for ";

let manualLinks = {
    "1": "https://web.archive.org/web/20221217174953/https://wakatime.com/leaders?page=1",
    "2": "https://web.archive.org/web/20221217175447/https://wakatime.com/leaders?page=2",
    "3": "https://web.archive.org/web/20221217175313/https://wakatime.com/leaders?page=3",
    "4": "https://web.archive.org/web/20221217175332/https://wakatime.com/leaders?page=4",
    "5": "https://web.archive.org/web/20221217175425/https://wakatime.com/leaders?page=5",
    "6": "https://web.archive.org/web/20221217175445/https://wakatime.com/leaders?page=6",
    "7": "https://web.archive.org/web/20221217175508/https://wakatime.com/leaders?page=7",
    "8": "https://web.archive.org/web/20221217175521/https://wakatime.com/leaders?page=8",
    "9": "https://web.archive.org/web/20221217175537/https://wakatime.com/leaders?page=9",
    "10": "https://web.archive.org/web/20221217175748/https://wakatime.com/leaders?page=10",
    "11": "https://web.archive.org/web/20221217235757/https://wakatime.com/leaders?page=11",
    "12": "https://web.archive.org/web/20221217175714/https://wakatime.com/leaders?page=12",
    "13": "https://web.archive.org/web/20221217175736/https://wakatime.com/leaders?page=13",
    "14": "https://web.archive.org/web/20221217175915/https://wakatime.com/leaders?page=14",
    "15": "https://web.archive.org/web/20221217175819/https://wakatime.com/leaders?page=15",
    "16": "https://web.archive.org/web/20221217175900/https://wakatime.com/leaders?page=16",
    "17": "https://web.archive.org/web/20221217175852/https://wakatime.com/leaders?page=17",
    "18": "https://web.archive.org/web/20221217175908/https://wakatime.com/leaders?page=18",
    "19": "https://web.archive.org/web/20221217175946/https://wakatime.com/leaders?page=19",
    "20": "https://web.archive.org/web/20221217175939/https://wakatime.com/leaders?page=20",
    "21": "https://web.archive.org/web/20221217183304/https://wakatime.com/leaders?page=21",
    "22": "https://web.archive.org/web/20221218041715/https://wakatime.com/leaders?page=22",
    "23": "https://web.archive.org/web/20221218041702/https://wakatime.com/leaders?page=23",
    "24": "https://web.archive.org/web/20221217183353/https://wakatime.com/leaders?page=24",
    "25": "https://web.archive.org/web/20221217183422/https://wakatime.com/leaders?page=25",
    "26": "https://web.archive.org/web/20221218041808/https://wakatime.com/leaders?page=26",
    "27": "https://web.archive.org/web/20221217180110/https://wakatime.com/leaders?page=27",
    "28": "https://web.archive.org/web/20221217183418/https://wakatime.com/leaders?page=28",
    "29": "https://web.archive.org/web/20221217180044/https://wakatime.com/leaders?page=29",
    "30": "https://web.archive.org/web/20221217183521/https://wakatime.com/leaders?page=30",
    "31": "https://web.archive.org/web/20221217180143/https://wakatime.com/leaders?page=31",
    "32": "https://web.archive.org/web/20221217180118/https://wakatime.com/leaders?page=32",
    "33": "https://web.archive.org/web/20221217180134/https://wakatime.com/leaders?page=33",
    "34": "https://web.archive.org/web/20221217184019/https://wakatime.com/leaders?page=34",
    "35": "https://web.archive.org/web/20221217184101/https://wakatime.com/leaders?page=35",
    "36": "https://web.archive.org/web/20221217184055/https://wakatime.com/leaders?page=36",
    "37": "https://web.archive.org/web/20221217184115/https://wakatime.com/leaders?page=37",
    "38": "https://web.archive.org/web/20221217184135/https://wakatime.com/leaders?page=38",
    "39": "https://web.archive.org/web/20221217184155/https://wakatime.com/leaders?page=39",
    "40": "https://web.archive.org/web/20221217184216/https://wakatime.com/leaders?page=40",
    "41": "https://web.archive.org/web/20221217180226/https://wakatime.com/leaders?page=41",
    "42": "https://web.archive.org/web/20221217224437/https://wakatime.com/leaders?page=42",
    "43": "https://web.archive.org/web/20221218040232/https://wakatime.com/leaders?page=43",
    "44": "http://web.archive.org/web/20221217184346/https://wakatime.com/leaders?page=44",
    "45": "http://web.archive.org/web/20221217184359/https://wakatime.com/leaders?page=45",
    "46": "http://web.archive.org/web/20221218040308/https://wakatime.com/leaders?page=46",
    "47": "http://web.archive.org/web/20221217184439/https://wakatime.com/leaders?page=47",
    "48": "https://web.archive.org/web/20221217184459/https://wakatime.com/leaders?page=48",
    "49": "https://web.archive.org/web/20221217184519/https://wakatime.com/leaders?page=49",
    "50": "http://web.archive.org/web/20221217184542/https://wakatime.com/leaders?page=50",
    "51": "http://web.archive.org/web/20221217184551/https://wakatime.com/leaders?page=51",
    "52": "http://web.archive.org/web/20221217180347/https://wakatime.com/leaders?page=52",
    "53": "http://web.archive.org/web/20221217184817/https://wakatime.com/leaders?page=53",
    "54": "http://web.archive.org/web/20221217180416/https://wakatime.com/leaders?page=54",
    "55": "http://web.archive.org/web/20221217181020/https://wakatime.com/leaders?page=55",
    "56": "http://web.archive.org/web/20221217184741/https://wakatime.com/leaders?page=56",
    "57": "http://web.archive.org/web/20221217184926/https://wakatime.com/leaders?page=57",
    "58": "http://web.archive.org/web/20221217232518/https://wakatime.com/leaders?page=58",
    "59": "http://web.archive.org/web/20221217184948/https://wakatime.com/leaders?page=59",
    "60": "http://web.archive.org/web/20221217184913/https://wakatime.com/leaders?page=60",
    "61": "http://web.archive.org/web/20221217185114/https://wakatime.com/leaders?page=61",
    "62": "http://web.archive.org/web/20221217184950/https://wakatime.com/leaders?page=62",
    "63": "http://web.archive.org/web/20221217185155/https://wakatime.com/leaders?page=63",
    "64": "http://web.archive.org/web/20221217185133/https://wakatime.com/leaders?page=64",
    "65": "http://web.archive.org/web/20221217185238/https://wakatime.com/leaders?page=65",
    "66": "http://web.archive.org/web/20221217185238/https://wakatime.com/leaders?page=66",
    "67": "http://web.archive.org/web/20221217185147/https://wakatime.com/leaders?page=67",
    "68": "http://web.archive.org/web/20221217185205/https://wakatime.com/leaders?page=68",
    "69": "http://web.archive.org/web/20221217185227/https://wakatime.com/leaders?page=69",
    "70": "http://web.archive.org/web/20221217185352/https://wakatime.com/leaders?page=70",
    "71": "http://web.archive.org/web/20221217192016/https://wakatime.com/leaders?page=71",
    "72": "http://web.archive.org/web/20221217180544/https://wakatime.com/leaders?page=72",
    "73": "http://web.archive.org/web/20221217185352/https://wakatime.com/leaders?page=73",
    "74": "http://web.archive.org/web/20221217185432/https://wakatime.com/leaders?page=74",
    "75": "http://web.archive.org/web/20221217191041/https://wakatime.com/leaders?page=75",
    "76": "http://web.archive.org/web/20221217185510/https://wakatime.com/leaders?page=76",
    "77": "http://web.archive.org/web/20221217180702/https://wakatime.com/leaders?page=77",
    "78": "http://web.archive.org/web/20221217180633/https://wakatime.com/leaders?page=78",
    "79": "http://web.archive.org/web/20221217185538/https://wakatime.com/leaders?page=79",
    "80": "http://web.archive.org/web/20221217180704/https://wakatime.com/leaders?page=80",
    "81": "http://web.archive.org/web/20221217185559/https://wakatime.com/leaders?page=81",
    "82": "http://web.archive.org/web/20221217192358/https://wakatime.com/leaders?page=82",
    "83": "http://web.archive.org/web/20221217192428/https://wakatime.com/leaders?page=83",
    "84": "http://web.archive.org/web/20221217192646/https://wakatime.com/leaders?page=84",
    "85": "http://web.archive.org/web/20221217192533/https://wakatime.com/leaders?page=85",
    "86": "http://web.archive.org/web/20221217192524/https://wakatime.com/leaders?page=86",
    "87": "http://web.archive.org/web/20221217192639/https://wakatime.com/leaders?page=87",
    "88": "http://web.archive.org/web/20221217192748/https://wakatime.com/leaders?page=88",
    "89": "http://web.archive.org/web/20221217192740/https://wakatime.com/leaders?page=89",
    "90": "http://web.archive.org/web/20221217192828/https://wakatime.com/leaders?page=90",
    "91": "http://web.archive.org/web/20221217192820/https://wakatime.com/leaders?page=91",
    "92": "http://web.archive.org/web/20221217225521/https://wakatime.com/leaders?page=92",
    "93": "http://web.archive.org/web/20221217192807/https://wakatime.com/leaders?page=93",
    "94": "http://web.archive.org/web/20221217193159/https://wakatime.com/leaders?page=94",
    "95": "http://web.archive.org/web/20221217225512/https://wakatime.com/leaders?page=95",
    "96": "https://web.archive.org/web/20221217193022/https://wakatime.com/leaders?page=96",
    "97": "http://web.archive.org/web/20221217225521/https://wakatime.com/leaders?page=97",
    "98": "http://web.archive.org/web/20221217193134/https://wakatime.com/leaders?page=98",
    "99": "http://web.archive.org/web/20221217193149/https://wakatime.com/leaders?page=99",
    "100": "http://web.archive.org/web/20221217234241/https://wakatime.com/leaders?page=100",
}

interface attribute {
    display_type?: string,
    trait_type: string,
    max_value?: number,
    value: number | string
}

interface metadataNft {
    description: string,
    external_url: string,
    image: string,
    name: string,
    attributes: attribute[]
}


let metadataNfts: metadataNft[] = [];
(async () => {
    for (let p = 1; p <= quantityOfPages; p++) {
        let snapDay = "";
        let lastSnap;
        let response;
        console.log(p);
        response = await axios.get(manualLinks[p]);
        const $ = cheerio.load(response.data);
        const statsTable = $("tr");
        statsTable.each((i, elem) => {
            if (i > 0) {
                let metaNft: metadataNft = {
                    description: "",
                    external_url: "https://colchetedao.com",
                    image: "https://ipfs.moralis.io:2053/ipfs/QmcuJNX1DL1myuwgTwxD11bqY1eygqsnTMPN8EtqcA7jQu/RankingLeaders.png",
                    name: "",
                    attributes: []
                };
                let leaderName = $(elem).find('.leader-coder').text();
                let codedHours = $(elem).find('.tcol').text();
                let avgCol = $(elem).find('.avgcol').text();
                let langs = $(elem).find('.langcol').text().split(",");
                let tip = $(elem).find('.tip').attr('title');
                metaNft.description = collectionDescription + leaderName;
                metaNft.name = leaderName;
                metaNft.attributes.push({ trait_type: "Hours Coded", value: codedHours });
                metaNft.attributes.push({ trait_type: "Daily Average", value: avgCol });
                codedHours = codedHours.split(/(\d+)/)
                let codeMinutes = parseInt(codedHours[1]) * 60 + parseInt(codedHours[3])
                metaNft.attributes.push({ trait_type: "Minutes Coded", value: codeMinutes, max_value: maxCodeMinutes });
                avgCol = avgCol.split(/(\d+)/)
                let dailyMinutes;
                if (avgCol.length == 5) {
                    dailyMinutes = parseInt(avgCol[1]) * 60 + parseInt(avgCol[3])
                } else {
                    dailyMinutes = parseInt(avgCol[1])
                }
                metaNft.attributes.push({ trait_type: "Daily Minutes Coded", value: dailyMinutes, max_value: maxAvgMinutes });
                langs.length > 0 ? metaNft.attributes.push({ trait_type: "Main Language", value: langs[0].replace(" ", "") }) : "";
                langs.length > 1 ? metaNft.attributes.push({ trait_type: "Second Language", value: langs[1].replace(" ", "") }) : "";
                langs.length > 2 ? metaNft.attributes.push({ trait_type: "Third Language", value: langs[2].replace(" ", "") }) : "";
                metaNft.attributes.push({ trait_type: "Location", value: tip });
                metaNft.attributes.push({ trait_type: "Ranking", value: (p-1)*100 + i ,max_value:maxRanking});
                metadataNfts.push(metaNft);
            }
        })
    }
    FileLib.gen(`wakatime/metadata/FirstCollectionMetadata.json`, JSON.stringify(metadataNfts))
})()

// (async ()=>{ 
//     console.log(await axios.get("http://web.archive.org/web/20221217175714/https://wakatime.com/leaders?page=12"))
// })()