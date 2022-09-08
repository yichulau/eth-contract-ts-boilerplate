import { HardhatRuntimeEnvironment } from "hardhat/types";
import { network, deployments, ethers, getNamedAccounts } from "hardhat";
import { assert, expect } from "chai";
import { developmentChains, networkConfig } from "../../helper-hardhat-config";
import { BasicNft } from "../../typechain-types";

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("Basic NFT Unit test", () => {
      let deployer;
      let basicNft : BasicNft;

      // A intitalise test to make sure we deployed the contrct and get the value based on inital state
      beforeEach("Initialise the contract", async () => {
        const accounts = await ethers.getSigners()
        deployer = accounts[0]
        await deployments.fixture(["mocks", "basicnft"])
        basicNft = await ethers.getContract("BasicNft");
      });

      // describe the test and test the constructor is initalise successfully
      describe("constructor", () => {
        it("constructor is successfully initialise", async () => {
          const name = await basicNft.name();
          const symbol = await basicNft.symbol();
          const getTokenCounter = await basicNft.getTokenCounter();
          assert.equal(name, "myToken");
          assert.equal(symbol, "TK");
          assert.equal(getTokenCounter.toString(), "0");
        });
      });

      describe("minting", ()=>{
        it("mint tokens", async () => {
          const mintTokens = await basicNft.mintNFT();
          await mintTokens.wait(1);
          const tokenURI = await basicNft.tokenURI(0);
          const getTokenCounter = await basicNft.getTokenCounter();
          console.log(getTokenCounter);
          assert.equal(getTokenCounter.toString(), "1");
          assert.equal(tokenURI, await basicNft.TOKEN_URI());
      });
      })

    });
