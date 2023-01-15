const NftMarket = artifacts.require("NftMarket");

module.exports = function (_deployer) {
  // Use deployer to state migration tasks.
  _deployer.deploy(NftMarket);
};
