import React from 'react'
import PropTypes from 'prop-types'
import TitleStyle from './style.css'

function Title({ children }) {
	return (
		<TitleStyle>
			<i className="icon-clock" />
			{ children }
		</TitleStyle>
	)
}

Title.propTypes = {
	children: PropTypes.string,
}

Title.defaultProps = {
	children: 'Pomodoro Clock',
}

export default Title
