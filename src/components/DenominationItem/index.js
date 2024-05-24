// Write your code here
import './index.css'

const DenominationItem = props => {
  const {itemDetails, onButtonClick} = props
  const {id, value} = itemDetails
  const onClickButton = () => {
    onButtonClick(id, value)
  }
  return (
    <li>
      <button className="button" type="button" onClick={onClickButton}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
