import styled from 'styled-components';

export const StyledBackground = styled.div`
	padding: 2rem 7% 6rem;
	background: url('./images/pattern-bg.png') no-repeat center center/cover;
	box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
	text-align: center;
	height: 35vh;

	h1 {
		color: #fff;
		margin-bottom: 2rem;
		font-size: 2rem;
		font-weight: 500;
	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {

		padding: 2rem;

	}
`;

export const InputBox = styled.div`
	display: flex;
	justify-content: center;
	border-radius: 0.8rem;
	background: #fff;
	width: 60%;
	margin: 0 auto;
	margin-bottom: 1rem;


	input {
		padding: 0.8rem 1.5rem;
		font-family: inherit;
		font-size: 1.1rem;
		width: 100%;
		border-radius: 10px 0 0 10px;
		border: none;
		outline: none;
	}

	span {
		background-color: #000;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.6rem 1.2rem;
		border-radius: 0 10px 10px 0;
		cursor: pointer;
	}

	span:hover {
		opacity: 0.8;
	}

	span img {
		width: 8px;
	}


	@media screen and (max-width: ${({ theme }) => theme.mobile}) {

		width: 100%;

		input {
			padding: 0.6rem 1.2rem;
		}

	}
`;
