import styled from 'styled-components'
import tw from 'tailwind.macro'

const ClockStyles = styled.div`
	${tw`rounded-full h-64 w-64 my-16 mx-auto border-8 border-gray border-solid relative flex justify-center items-center`}
	button {
		${tw`text-red text-lg bg-transparent border-red border-4 rounded-full w-12 h-12`}
	}
`

export default ClockStyles
