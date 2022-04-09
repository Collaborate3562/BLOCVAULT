require('dotenv').config();

async function main() {
  // Grab the contract factory 

  // Start deployment, returning a promise that resolves to a contract object

  // const MyNFT = await ethers.getContractFactory("BCNFTMarketplace");

  // const arg1 = "0x84E332CB3AE286344143c7F7a2712F36162554af"; // NFT Address
  // const arg2 = "0x53569a6E822Af3B11137be68e2f944Ae18832aDD"; // paymentAddress
  // const arg3 = "0x53569a6E822Af3B11137be68e2f944Ae18832aDD"; // payoutAddress
  // const arg4 = "0x51b650e52Ea7726Be0F3a45779875A4AC27E42A9"; // Token Address
  // const arg5 = "0xA9cc497e49A0D168b3Bb7F1C5d4b4e44932B33a4"; // Development Address

  // const myNFT = await MyNFT.deploy(arg1, arg2, arg3, arg4, arg5); // Instance of the contract 

  // const MyNFT = await ethers.getContractFactory("BCToken");

  // const arg1 = "0x84E332CB3AE286344143c7F7a2712F36162554af"; // NFT Address
  // const arg2 = "0xd99d1c33f9fc3444f8101754abc46c52416550d1"; // PancakeRouter Address
  // const arg3 = "0x4dbf253521e8e8080282c964975f3afb7f87cece"; // USDT Address
  // const arg4 = "0x0000000000000000000000000000000000000000"; // Staking Address
  // const arg5 = 9647382007;

  // const myNFT = await MyNFT.deploy(arg1, arg2, arg3, arg4, arg5); // Instance of the contract 

  // const MyNFT = await ethers.getContractFactory("BCNFTStaking");

  // const arg1 = "0x84E332CB3AE286344143c7F7a2712F36162554af"; // NFT Address
  // const arg2 = "0x51b650e52Ea7726Be0F3a45779875A4AC27E42A9"; // Token Address
  // const arg3 = "0x53569a6E822Af3B11137be68e2f944Ae18832aDD"; // Adminrecovery Address

  // const myNFT = await MyNFT.deploy(arg1, arg2, arg3); // Instance of the contract 

  // const MyNFT = await ethers.getContractFactory("BreedNFT");

  // const arg1 = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56"; // BUSD Address
  // const arg2 = "0xB0D0eDB26B7728b97Ef6726dAc6FB7a43d6043E1"; // test BUSD Address

  // const myNFT = await MyNFT.deploy(arg1, arg2); // Instance of the contract 

  const MyNFT = await ethers.getContractFactory("Crowd");

  const arg1 = "0xB0D0eDB26B7728b97Ef6726dAc6FB7a43d6043E1"; // BUSD Address
  const arg2 = "0xB0D0eDB26B7728b97Ef6726dAc6FB7a43d6043E1"; // test BUSD Address
  const arg3 = "0xB0D0eDB26B7728b97Ef6726dAc6FB7a43d6043E1";
  const arg4 = "0xB0D0eDB26B7728b97Ef6726dAc6FB7a43d6043E1";

  const myNFT = await MyNFT.deploy(arg1, arg2, arg3, arg4); // Instance

  // const MyNFT = await ethers.getContractFactory("BCNFT");
  // const myNFT = await MyNFT.deploy(); // Instance of the contract 

  console.log("Contract deployed to address:", myNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });