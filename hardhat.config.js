require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
    },
    matic: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/6hcOZLOLqttJC93ugTveYjzHqOb0CODM",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
