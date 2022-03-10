const PurifiedSmartContract = artifacts.require("PurifiedSmartContract");

// equivalent describe block of Mocha library, js testing library
contract("PurifiedSmartContract", () => {
  it("Should deploy smart contract properly", async () => {
    const purifiedSmartContract = await PurifiedSmartContract.deployed();
    // deployed() DOES NOT deploy a contract by itself. It only returns you a js object pointing to an already deployed smart contract.
    // Migrations are used to define what should be deployed
    console.log(purifiedSmartContract.address);
    //assert = comparer
    assert(purifiedSmartContract.address !== "");
  });
});
