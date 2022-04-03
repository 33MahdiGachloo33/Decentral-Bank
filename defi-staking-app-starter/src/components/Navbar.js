import React, {Component} from 'react'
import bank from'../bank.png'

class Navbar extends Component{
    render(){
        return(
        <nav className='navbar navbar-dark fixed-top shadow p-0' style={{ backgroundColor: 'black', height: '50px' }}>
                <a className='navbar-brand col-sm-3 col-md-2 mr-0'
                style={{color: 'white'}}>Dapp Staking For You
                <img src={bank} width='50' height='30' className='d-inline-block align-top' alt='bank'/>
                &nbsp; Dapp Staking For You
                </a>
                <ul className ='navbar-nav px-3'>
                    <li className='text-nowrap d-none nav-item d-sm-none d-sm-block'>
                        <small style={{ color: 'white' }}>Acoount Number:{this.props.account}
                        </small>
                    </li>
                </ul>
        </nav>
        )

    }
}
export default Navbar;