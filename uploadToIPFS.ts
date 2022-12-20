import Moralis from "moralis";
let contracts = require("./wakatime/metadata/FirstCollectionMetadata.json")
import FileLib from "./FileLib";
require("dotenv").config();

namespace genImages {
    const fs = require('fs');
    const runApp = async () => {
        await Moralis.start({
            apiKey: process.env.API_KEY_MORALIS,
        });

        let abi:any = [
        ];

        for(let i =0;i < contracts.length;i++){
            var b = Buffer.from(JSON.stringify(contracts[i]));
            var encodedJSON = b.toString('base64');
            abi.push({path:`${i+1}.json`,
                      content: encodedJSON})
        }
        FileLib.gen(`wakatime/metadata/FirstCollectionMetadataEncoded.json`, JSON.stringify(abi))
        // const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });

        // console.log(response.toJSON());
    }

    runApp();
}