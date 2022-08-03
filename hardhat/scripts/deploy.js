const { ethers } = require("hardhat");
const { CRYPTODEVS_NFT_CONTRACT_ADDRESS } = require("../constants");

async function main() {
  // Deploy the FakeNFTMarketplace contract first
  const FakeNFTMarketplace = await ethers.getContractFactory(
    "FakeNFTMarketplace"
  );
  const fakeNftMarketplace = await FakeNFTMarketplace.deploy();
  await fakeNftMarketplace.deployed();

  console.log("FakeNFTMarketplace deployed to: ", fakeNftMarketplace.address);

  // Now deploy the CryptoDevsDAO contract
  const CryptoDevsDAO = await ethers.getContractFactory("CryptoDevsDAO");
  const cryptoDevsDAO = await CryptoDevsDAO.deploy(
    fakeNftMarketplace.address,
    CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    {
      // This assumes your account has at least 1 ETH in it's account
      // Change this value as you want
      value: ethers.utils.parseEther("1"),
    }
  );
  await cryptoDevsDAO.deployed();

  console.log("CryptoDevsDAO deployed to: ", cryptoDevsDAO.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(120000);

  // Verify the contract after deploying
  await hre.run("verify:verify", {
    address: fakeNftMarketplace.address,
  });


  await hre.run("verify:verify", {
    address: cryptoDevsDAO.address,
    constructorArguments: [
      fakeNftMarketplace.address,
      CRYPTODEVS_NFT_CONTRACT_ADDRESS,
    ],
  });

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });