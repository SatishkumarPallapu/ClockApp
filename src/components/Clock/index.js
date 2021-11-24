import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {
    date: new Date(),
  }

  componentDidMount() {
    this.timeId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    const {date} = this.state
    console.log(date)
    return (
      <div className="clock-container">
        <h1 className="heading">{date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}
export default Clock
