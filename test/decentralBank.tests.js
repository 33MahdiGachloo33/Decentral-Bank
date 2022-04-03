const Tether = artifacts.require('Tether')
const RWD = artifacts.require('RWD')
const DecentralBank = artifacts.require('DecentralBank')

require('chai')
.use(require('chai-as-promised')
.should,
contract('DecentralBank', (accounts) =>{
    describe('Mock Tether Deployment', async()=>{
        it('matches name successfully', async()=>{
        let tether = await Tether.new()
        const name =await tether.name()
        assert.equal(name, 'Mock Tether Token')
        })
    })
describe('Reward Token Deployment', async() => {
    it('matches name successfully', async() =>{
        const name = await rwd.name()
        assert.equal(name, 'Reward Token')
    })
})

describe('Decentral Bank Deployment', async() => {
    it('matches name successfully', async() =>{
        const name = await decentralBank.name()
        assert.equal(name, 'Decentral Bank')
    })

    it('contract has tokens', async()=>{
    let balance =await rwd.balanceOf(decentralBank.address)
    assert.equal(balance, tokens('1000000'))
    })

describe('Yield Farming', async()=>{
    it('rewards tokens for staking'), async=>{
        let result

        //check investor balance
        result=await tether.balanceOf(customer)
        assert.equal(result.toString(), tokens('100'),'customer wallet balance before staking')
    }

    //check staking for customer of 100 tokens
    await tether.approve(decentralBank.address, tokens('100'), {from: customer})
    await decentralBank.depositTokens(tokens('100'), {from: customer})


    //check updated balance of customer
    result=await tether.balanceOf(customer)
    assert.equal(result.toString(), tokens('0'),'customer wallet balance after staking')

    //check updated balance of Decentral Bank
    result=await tether.balanceOf(decentralBank.address)
        assert.equal(result.toString(), tokens('100'),'deceentral bank wallet balance after staking from customer')
})
})
})


)