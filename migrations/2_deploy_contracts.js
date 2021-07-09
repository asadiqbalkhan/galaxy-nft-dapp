const PlanetToken = artifacts.require("PlanetToken");

module.exports = function (deployer) {
  deployer.deploy(PlanetToken);
};
