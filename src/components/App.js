import React,{Component} from "react";
import Navbar from './Navbar';
import Web3 from "web3";
import DecentralizedTaxi from '../truffle_abis/DecentralizedTaxi.json'
import Main from './Main.js'
import ParticleSettings from './ParticleSettings.js'

class App extends Component{
    //React code goes here
    async UNSAFE_componentWillMount(){
        await this.loadWeb3();
        await this.loadBlockchainData();
    }
    async loadBlockchainData(){
        const web3=window.web3;
        const account=await web3.eth.getAccounts();
        this.setState({account:account[0]});
       // console.log(account);
        const networkId=await web3.eth.net.getId();//getting network ID
       //console.log(networkId,'Network ID');
        
    //LOAD CONTRACT
        const DTdata=DecentralizedTaxi.networks[networkId];
        if(DTdata){
            const db=new web3.eth.Contract(DecentralizedTaxi.abi,DTdata.address)
            this.setState({db})
            //let t_balance=await db.methods.balanceOf(this.state.account).call();
                //the call method is used whenever methods. is used -->to call back
            //this.setState({tetherBalance: t_balance.toString()})
            //console.log({balance:t_balance});
        }else{
            window.alert("Error!  contract not deployed-No detected method")
        }
        this.setState({loading: false});
    }
       
    //    //LOAD TETHER CONTRACT
    //     const tetherData=Tether.networks[networkId];
    //     if(tetherData){
    //         const tether=new web3.eth.Contract(Tether.abi,tetherData.address)
    //         this.setState({tether})
    //         let t_balance=await tether.methods.balanceOf(this.state.account).call();
    //         //the call method is used whenever methods. is used -->to call back
    //         this.setState({tetherBalance: t_balance.toString()})
    //         console.log({balance:t_balance});
    //     }else{
    //         window.alert("Error! Tether contract not deployed-No detected method")
    //     }
    //     //LOAD REWARD TOKEN
    //     const rewardData=Reward.networks[networkId];
    //     if(rewardData){
    //         const rwd=new web3.eth.Contract(Reward.abi,rewardData.address)
    //         this.setState({rwd})
    //         let rwd_balance=await rwd.methods.balanceOf(this.state.account).call();
    //         //the call method is used whenever methods. is used -->to call back
    //         this.setState({rwdBalance: rwd_balance.toString()})
    //         console.log({balance:rwd_balance});
    //     }else{
    //         window.alert("Error! Reward contract not deployed-No detected method")
    //     }
    //     //Load DecentralBank TOKEN
    //     const DCBData=DCB.networks[networkId];
    //     if(DCBData){
    //         const dcb=new web3.eth.Contract(DCB.abi,DCBData.address)
    //         this.setState({dcb})
    //         let stakingBalance=await dcb.methods.stakingBalance(this.state.account).call();
    //         //the call method is used whenever methods. is used -->to call back
    //         this.setState({stakingBalance: stakingBalance.toString()})
    //         console.log({balance:stakingBalance});
    //     }else{
    //         window.alert("Error! Decentralised bank contract not deployed-No detected method")
    //     }
    async loadWeb3(){
        if(window.ethereum){
            window.web3=new Web3(window.ethereum);
            await window.ethereum.enable();
        }else if(window.web3){
                window.web3=new Web3(window.web3.currentProvider)
        }else{
                window.alert('No ethereum browser detected! Check out Metamask')
        }
    }
    constructor(props){
         //props and state->the js part making the code dynamic
        super(props)
        this.state={
            account:'0x0',
            tether: {},
            rwd:{},
            decentralBank:{},
            tetherBalance:'0',
            rwdBalance:'0',
            stakingBalance:'0',
            loading:true
        }
    }
    render(){
        //now we can access these components in Main.js
        return(
            //HTML here
            <div className='App' style={{position:'relative'}}>
                    <Navbar/>
                <div className='main-mt-5' align='text-center' style={{position:'absolute'}}>
                    <Main/>
                </div>
            </div>
        )
    }
}

export default App;