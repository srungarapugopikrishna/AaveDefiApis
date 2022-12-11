const hre = require("hardhat");

async function deployAppWithGasEstimation() {
  const AaveDefiOps = await ethers.getContractFactory("AaveDefiOps");

  const gasPrice = await AaveDefiOps.signer.getGasPrice();
  console.log(`Current gas price: ${gasPrice}`);

  const estimatedGas = await AaveDefiOps.signer.estimateGas(
    AaveDefiOps.getDeployTransaction(
      "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"
    )
  );
  console.log(`Estimated gas: ${estimatedGas}`);

  const deploymentPrice = gasPrice.mul(estimatedGas);
  const deployerBalance = await AaveDefiOps.signer.getBalance();
  console.log(
    `Deployer balance:  ${ethers.utils.formatEther(deployerBalance)}`
  );
  console.log(
    `Deployment price:  ${ethers.utils.formatEther(deploymentPrice)}`
  );
  if (deployerBalance.lt(deploymentPrice)) {
    throw new Error(
      `Insufficient funds. Top up your account balance by ${ethers.utils.formatEther(
        deploymentPrice.sub(deployerBalance)
      )}`
    );
  }

  // const aaveDefiOps = await AaveDefiOps.deploy("0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D");
  // await aaveDefiOps.deployed();
  // console.log("AaveDefiOps deployed To: ", aaveDefiOps.address);
  // const data = {
  //   address: aaveDefiOps.address,
  //   abi: JSON.parse(aaveDefiOps.interface.format("json")),
  // };

  // fs.writeFileSync("./AaveDefiOps.json", JSON.stringify(data));
}
async function main() {
  console.log("deploying...");
  const AaveDefiOps = await hre.ethers.getContractFactory("AaveDefiOps");
  const aaveDefiOps = await AaveDefiOps.deploy(
    "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"
  );
  await aaveDefiOps.deployed();
  console.log("AaveDefiOps loan contract deployed: ", aaveDefiOps.address);
  // deployAppWithGasEstimation();
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
