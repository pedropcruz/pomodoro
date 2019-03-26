import styled from 'styled-components'
import tw from 'tailwind.macro'

const Container = styled.main`
	${tw`mx-auto px-16 py-16 font-primary bg-white text-primary rounded shadow-md absolute`}
	top:50%;
	left:50%;
	transform: translate(-50%, -50%);
	width: 100%;
	@media (min-width: 576px){
		max-width: 576px;
	}
	@media (min-width: 768px){
		max-width: 768px;
	}
	@media (min-width: 992px){
		max-width: 992px;
	}
	@media (min-width: 1200px){
		max-width: 1200px;
	}
`

export default Container
