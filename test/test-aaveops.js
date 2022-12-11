const { hre } = require("hardhat");
const { expect } = require("chai");

describe("AavesupplyLiquidityTest", function () {
  it("Should increase liquidity to the contract", async function () {
    const AaveDefiOps = await hre.ethers.getContractFactory("AaveDefiOps");
    const aaveDefiOps = await AaveDefiOps.deploy();
    await aaveDefiOps.deployed();

    aaveDefiOps.getBalance();
    
  });
});
