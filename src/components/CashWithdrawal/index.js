// Write your code here
import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    currentAmount: 2000,
  }

  onButtonClick = (id, value) => {
    this.setState(prevState => ({
      currentAmount: prevState.currentAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {currentAmount} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="name-container">
            <div className="letter">
              <p className="alphabet">S</p>
            </div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="balance-container">
            <p className="para">Your Balance</p>
            <div className="amount">
              <p className="money">{currentAmount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="heading">Withdraw</p>
            <p className="para-1">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="buttons-container">
            {denominationsList.map(item => (
              <DenominationItem
                itemDetails={item}
                key={item.id}
                onButtonClick={this.onButtonClick}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
