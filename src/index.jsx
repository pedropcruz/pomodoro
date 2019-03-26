import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyle from './style.css'
import ClockContainer from './container/ClockContainer'
import './assets/icons/pomodoro.css'

function App() {
	return (
		<>
			<ClockContainer />
			<GlobalStyle />
		</>
	)
}

ReactDOM.render(<App />, document.getElementById('root'))
