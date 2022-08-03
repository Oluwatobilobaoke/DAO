# DAO  SMART CONTRACT
Building our DAO
I want to launch a DAO for holders of my CryptoDevs NFTs. From the ETH that was gained through the ICO, I built up a DAO Treasury. The DAO now has a lot of ETH, but currently does nothing with it.

I want to allow my NFT holders to create and vote on proposals to use that ETH for purchasing other NFTs from an NFT marketplace, and speculate on price. Maybe in the future when I sell the NFT back, I split the profits among all members of the DAO.

##Requirements
- Anyone with a CryptoDevs NFT can create a proposal to purchase a different NFT from an NFT marketplace
- Everyone with a CryptoDevs NFT can vote for or against the active proposals
- Each NFT counts as one vote for each proposal
- Voter cannot vote multiple times on the same proposal with the same NFT
- If majority of the voters vote for the proposal by the deadline, the NFT purchase is automatically executed

## Contracts

- [NFT Contract](https://rinkeby.etherscan.io/address/0x53F9768BB028775a5A069CCBbA8003B67919eE28)
- [Fake NFT MarketPlace Contract](https://rinkeby.etherscan.io/address/0xD0d39F504eb6C084bA7779B9Ab5d6137b4E72c93)
- [DAO Contract](https://rinkeby.etherscan.io/address/0x55E74dad983d0F55D695C0C971A3bD495b3d8547)

## NFT repo
Click [here] (https://github.com/Oluwatobilobaoke/nft-collection-)
## ICO Repo
Click [here] (https://github.com/Oluwatobilobaoke/ico)

```shell
npx hardhat help
npx hardhat test
GAS_REPORT=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
