const PurifiedSmartContract = artifacts.require("PurifiedSmartContract");

module.exports = function (deployer) {
  deployer.deploy(PurifiedSmartContract);
};
