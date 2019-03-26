import React from 'react'
import PropTypes from 'prop-types'
import InputStyle from './style.css'

export default class Input extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			times: (props.name === 'minutesForWork' ? props.time : 5 * 60),
			minutesDefault: (props.name === 'minutesForWork' ? 25 : 5),
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleKey = this.handleKey.bind(this)
	}

	handleKey(e) {
		this.handleChange(e)
	}

	handleChange(e) {
		const { minutesDefault } = this.state
		if (e.target.value > 0) {
			this.changePlaceholder(e.target.value, e)
		} else {
			this.changePlaceholder(minutesDefault, e)
		}
	}

	changePlaceholder(value, e) {
		const { handleChange, name } = this.props
		handleChange(name, value)
		this.setState({ times: value * 60 })
		e.target.value = `${value}:00`
	}

	render() {
		const { text, name } = this.props
		const { times } = this.state
		const minutes = times / 60
		return (
			<InputStyle>
				<h2>{text}</h2>
				<input
					type="number"
					name={name}
					placeholder={`${minutes}:00`}
					onBlur={this.handleChange}
				/>
			</InputStyle>
		)
	}
}

Input.propTypes = {
	name: PropTypes.string.isRequired,
}
