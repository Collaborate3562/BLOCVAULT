/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const { API_URL, PRIVATE_KEY } = process.env;
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
module.exports = {
   defaultNetwork: "binance",
   networks: {
      hardhat: {},
      binance: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
   etherscan: {
      // Your API key for Etherscan
      // Obtain one at https://etherscan.io/
      apiKey: "ZDNE9AKXQ1KIWA3VK6RQGTAB25AHTQ8NPC"
   },
   solidity: {
      version: "0.8.7",
      settings: {
         optimizer: {
            enabled: true
         }
      }
   }
}
  console.log("Contract deployed to address: private", PRIVATE_KEY);