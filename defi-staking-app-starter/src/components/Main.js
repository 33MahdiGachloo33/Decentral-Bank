import React, {Component, useEffect} from 'react'
import tether from '../tether.png'
import Airdrop from'./Airdrop'

class Main extends Component{
    render(){
        return(
            <><><div id='content' className='mt-3'>
                <table className='table text-muted text-center'>
                    <thead>
                        <tr style={{ color: 'white' }}>
                            <th style='col'>Staking Balance</th>
                            <th style='col'>Reward Balance</th>

                        </tr>



                    </thead>
                    <tbody>
                        <tr style={{ color: 'white' }}>
                            <td>{window.web3.utils.fromWei(this.props.stakingBalances, 'Ether')} USDT</td>
                            <td>{window.web3.utils.fromWei(this.props.rwdBalances , 'Ether')} RWD</td>

                        </tr>

                    </tbody>
                </table>
                <div className='mb-2' style={{ opracity: '.9' }}>
                    <form 
                    onSubmit={(event) =>{
                        event.preventDefault()
                        let amount
                        amount=this.input.va;useEffect.toString()
                        amount=window.web3.utils.toWei(amount, 'Ether')
                        this.props.stakeTokens(amount)

                    }}
                    
                    className='mb-3'>
                        <div style={{ borderSpacing: '0 1em' }}>
                            <label className='float-left style={{marginLeft:' />15px'><b>Stake Tokens</b></label>
                        <span className='float-right' style={{ marginRight: '8px' }}>
                            Balance: {window.web3.utils.fromWei(this.props.tetherBalances , 'Ether')}
                        </span>
                        <div className='input-group mb-4'>
                            <input
                                ref={(input) =>{this.input=input}}
                                type='text'
                                placeholder='0'
                                reuired />
                            <div className='input-group-open'>
                                <div className='input-group-text'>
                                    <img alt='tether' src={tether} height='32' />
                                    &nbsp;&nbsp;&nbsp;USDT
                                </div>
                            </div>
                        </div>
                        <button type='submit'
                        onClick={(event) => {
                            event.preventDefault(
                            this.props.unstakeTokens()

                            )
                        }} 
                        className=' btn btn-primary btn-lg btn-block />' />'>DEPOSIT</button>
                    <div className='card-body text-center' style={{ color: 'blue' }}>
                        AIRDROP <Airdrop/>
                    </div>



                </div>

            </form>
                <button className='btn btn-primary btn-lg btn-block'>WITHDRAW</button></><div className='card-body'>

                </div></>

            </div>
        
        )

    }
}
export default Main;