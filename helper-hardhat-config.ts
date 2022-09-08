const networkConfig = {
    4: {
      name: "rinkeby",
      ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
    },
    5: {
      name: "goerli",
      vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
      raffleEntranceFee: "000000000000000000",
      gasLane:
        "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
      subscriptionId: "1028",
      callbackGasLimit: "500000",
      keepersUpdateInterval: "30",
    },
    31337: {
      name: "localhost",
      subscriptionId: "588",
      gasLane:
        "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
      keepersUpdateInterval: "30",
      raffleEntranceFee: "000000000000000000", // 0.1 ETH
      callbackGasLimit: "500000", // 500,000 gas
    },
  };
  
  const developmentChains = ["hardhat", "localhost"];
  const VERIFICATION_BLOCK_CONFIRMATIONS = 6;
  const FRONT_END_ADDRESSES_FILE =
    "../lesson4_nextjs/constants/contractAddresses.json";
  const FRONT_END_ABI_FILE = "../lesson4_nextjs/constants/abi.json";

  // module.exports = {
  //   networkConfig,
  //   developmentChains,
  //   VERIFICATION_BLOCK_CONFIRMATIONS,
  //   FRONT_END_ADDRESSES_FILE,
  //   FRONT_END_ABI_FILE,
  // };
  
  export {
    networkConfig,
    developmentChains,
    VERIFICATION_BLOCK_CONFIRMATIONS,
    FRONT_END_ADDRESSES_FILE,
    FRONT_END_ABI_FILE,
  }