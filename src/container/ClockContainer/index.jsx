import React from 'react'
import Title from '../../component/Title'
import Container from './style.css'
import Time from '../../component/Time'
import Clock from '../../component/Clock'
import Input from '../../component/Input'

export default class ClockContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			running: false,
			time: 25 * 60,
		}

		this.handleChange = this.handleChange.bind(this)
		this.startCountDown = this.startCountDown.bind(this)
	}

	componentDidUpdate(prevProps, prevState) {
		const { running } = this.state
		if (running !== prevState.running) {
			switch (running) {
				case true:
					this.startCountDown()
					break
				case false:
					this.stopCountDown()
					break
				default:
			}
		}
	}

	handleChange(name, value) {
		this.setState({
			time: value * 60,
		})
	}

	startCountDown() {
		this.timer = setInterval(() => {
			const { time } = this.state
			const newTime = time - 1
			this.setState({
				time: newTime >= 0 ? newTime : 0,
			})
		}, 1000)
	}

	stopCountDown() {
		if (this.timer) {
			clearInterval(this.timer)
			this.setState({ running: false })
		}
	}

	render() {
		const { time } = this.state
		return (
			<Container>
				<Title />
				<Time time={time} />
				<Clock handleClick={this.startCountDown} />
				<Input text="Work Time" time={time} name="minutesForWork" handleChange={this.handleChange} />
				<Input text="Rest Time" time={time} name="minutesForRest" handleChange={this.handleChange} />
			</Container>
		)
	}
}
