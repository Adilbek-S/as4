require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    bnbtestnet: {
      url: "https://floral-divine-mansion.bsc-testnet.discover.quiknode.pro/1ad69c8d4f5668afe5b5eec6228155e4f99069ac/",
      accounts:[
        "88afcc317b5aed35f3dfa404ae2a61e43c21db267b52b5355dec1a2d69e0eb9b",
      ]
    }
  },
  etherscan:{
    apiKey: "Z6H2Q2ND5VCIDXIBETK9RDDRGYR4Z73VKX",
  }
};
