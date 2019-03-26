import styled from 'styled-components'
import tw from 'tailwind.macro'

const InputStyle = styled.div`
	${tw`flex justify-around my-4 text-2xl`}
	input{
		${tw`bg-transparent border-0 text-right text-2xl`}
		&:focus{
			${tw`outline-none shadow-none`}
		}
	}
`

export default InputStyle
