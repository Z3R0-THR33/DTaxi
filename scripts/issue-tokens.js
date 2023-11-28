const db=artifacts.require('DecentralBank');

module.exports=async function issueRewards(){
    let dB=await db.deployed();
    await dB.issueTokens();
    console.log('Tokens have issued successfully');
    callback();
}