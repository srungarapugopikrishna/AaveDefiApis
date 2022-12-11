require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.10",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/VjSnVmpD6gRO3EqVwps-TUbn2eLEtSn-",
      accounts: [
        "8c047d9023ff4432ad316bb113a344622517e99f29fb9e996c949ad778b741eb",
      ],
    },
  },
};
