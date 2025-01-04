/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.26",
   defaultNetwork: "nft",
   networks: {
      hardhat: {},
      nft: {
         url:"http://127.0.0.1:8545",
         chainId:1337,
         accounts: [`0x${PRIVATE_KEY}`],
         gas: 21000000,
         gasPrice: 20000000000,
      }
   },
}