import React,{Component} from 'react'
import bank from '../bank.png'
class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark shadow p-0" style={{backgroundColor:'black',height:'50px'}}>
                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="#navbarSupportedContent">
                    <a className='navbar-brand col-sm-3 col-md-2 mr-0' style={{color:'white'}}>
                    <img src={bank} width='50' height='30' className='d-inline-block align-top' alt='Bank '/>
                        DTaxi(Decentralized Taxi Service)
                    </a>
                <ul className='navbar-nav px-3 ml-auto'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white'}}>
                            <a class='nav-link'>Book a Ride</a>
                        </small>
                    </li>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white'}}>
                            <a class='nav-link'>Accept Ride</a>
                        </small>
                    </li>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white'}}>
                            <a class='nav-link'>Cancel Ride</a>
                        </small>
                    </li>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white'}}>
                            <a class='nav-link'>Customer Registration</a>
                        </small>
                    </li>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{color:'white'}}>
                            <a class='nav-link'>Driver Registration</a>
                        </small>
                    </li>
                </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;