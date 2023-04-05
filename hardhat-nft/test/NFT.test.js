const { ethers } = require("hardhat");
const { assert, expect } = require("chai");

describe("NFT",function(){
 let nftFactory, contract,acc1,acc2,cost;


  beforeEach(async function () {
    [acc1,acc2]=await ethers.getSigners();
    nftFactory = await ethers.getContractFactory("NFT");
    contract = await nftFactory.deploy();
    cost=1000000000000000;
  });

  it("Should should be deployed", async function () {
    expect(contract.address).to.be.properAddress;
  });

  it("Token should be mintable", async function () {
    const tx=await contract.safeMint(acc1.address,{value:cost});
    const tokenURI=await contract.tokenURI(0);
    console.log(tokenURI);
    expect(tokenURI.length).to.gt(0);
  });

  it("Mint should be payed", async function () {    
    const tx=await contract.connect(acc2).safeMint(acc2.address,{value:cost});
    await expect(()=>tx).to.changeEtherBalances([acc2,contract],[-cost,cost]);
  });

  
})