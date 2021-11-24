import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {
    isClockVisible: true,
  }

  updateTheState = () => {
    const {isClockVisible} = this.state
    this.setState({
      isClockVisible: !isClockVisible,
    })
    console.log(isClockVisible)
  }

  render() {
    const {isClockVisible} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.updateTheState}
        >
          {isClockVisible ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isClockVisible && <Clock />}
      </div>
    )
  }
}

export default App
