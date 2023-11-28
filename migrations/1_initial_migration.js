//grab Migrations.sol contract
const Migrations=artifacts.require('Migrations');
//we don't need to specify where cuz we hv our config in truffle-config.js
module.exports=function (deployer){
    deployer.deploy(Migrations);//to deploy
};
//environment set up..we can start writing smart contracts
