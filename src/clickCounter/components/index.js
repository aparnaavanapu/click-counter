// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">
          The Button has been clicked <span className="spanEle">{count} </span>
          times
        </h1>
        <p className="description">Click the button to increase the count!</p>
        <button onClick={this.onIncrement} className="btn">
          Click Me!
        </button>
      </div>
    )
  }
}
export default ClickCounter
