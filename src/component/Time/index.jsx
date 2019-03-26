import React from 'react'
import PropTypes from 'prop-types'
import TimeStyle from './style.css'

function Time({ time }) {
	let minutes = Math.floor(time / 60)
	let seconds = (time % 60).toFixed(0)

	if (seconds < 10) {
		seconds = `0${seconds}`
	}
	if (minutes < 10) {
		minutes = `0${minutes}`
	}

	return (
		<TimeStyle>
			{minutes}
			{ ':' }
			{seconds}
		</TimeStyle>
	)
}


Time.propTypes = {
	time: PropTypes.number.isRequired,
}

export default Time
