/*eslint-disable*/
import React from 'react'
import ClockStyle from './style.css'

export default class Clock extends React.Component {

	constructor(props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		const {handleClick} = this.props

		handleClick()
	}

	render() {
		return (
			<ClockStyle>
				<button
					type="button"
					onClick={this.handleClick}
				>
					<i className="icon-play" />
				</button>
			</ClockStyle>
		)
	}
}
