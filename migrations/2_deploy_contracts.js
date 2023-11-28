const DecentralizedTaxi=artifacts.require('DecentralizedTaxi');
//const RWD=artifacts.require('RWD');
//const DecentralBank=artifacts.require('DecentralBank');
//we don't need to specify where cuz we hv our config in truffle-config.js
module.exports=async function (deployer,network,accounts){
    //Deploy Tether
    await deployer.deploy(DecentralizedTaxi);
    const dt=await DecentralizedTaxi.deployed();
    
    // //deploy RWD tokens
    // await deployer.deploy(RWD);
    // const rwd=await RWD.deployed();

    // //deploy Decentral Bank
    // await deployer.deploy(DecentralBank,rwd.address,tether.address);
    // const decentralBank=await DecentralBank.deployed();
    
    // //Transfer all RWD to Central Bank
    // await rwd.transfer(decentralBank.address,'1000000000000000000000000');
    // //distribute 100 Tether tokens to investor
    // await tether.transfer(accounts[1],'100000000000000000000')
};//async allows us to run js asynchronously
//think of it as waiting to deploy until we have all the info from Tether
