import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		box-sizing: border-box;
		max-width: 100%;
		transition: 0.3s ease;
	}

	body {
		color: ${({theme}) => theme.colors.text};
		font-family: 'Rubik', sans-serif;
		overflow-x: hidden;
	}


	@media screen and (max-width: ${({ theme }) => theme.mobile}) {

		html {
			font-size: 80%;
		}

	}

	@media screen and (min-width:1500px) {
		html {
			font-size: 120%;
		}
	}

`;