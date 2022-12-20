import Moralis from "moralis";
require("dotenv").config();

namespace genImages {
    const fs = require('fs');
    const runApp = async () => {
        await Moralis.start({
            apiKey: process.env.API_KEY_MORALIS,
        });

        const abi = [
            {
                path: "RankingLeaders.png",
                content: fs.readFileSync(`wakatime/images/RankingLeaders.png`, 'base64'),
            },
        ];

        const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

        console.log(response.toJSON());
    }

    runApp();
}