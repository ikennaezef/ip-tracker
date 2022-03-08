import styled from 'styled-components';

export const StyledInfoContainer = styled.div`
	background-color: #fff;
	border-radius: 0.8rem;
	box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2);
	padding: 2rem 1rem;
	width: 90%;
	max-width: 55rem;
	margin: 0 auto;
	transform: translateY(25%);
	display: flex;
	align-items: flex-start;

	& > div {
		padding: 0 1.5rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		flex: 1;

		span {
			color: ${({ theme }) => theme.colors.lightText};
			font-size: 0.6rem;
			margin-bottom: 0.8rem;
		}
	}

	p {
		font-size: 1.3rem;
		font-weight: 500;
		text-align: left;
	}

	@media screen and (max-width: ${({ theme }) => theme.tablet}) {

		transform: translateY(10%);
		width: 100%;

	}

	@media screen and (max-width: ${({ theme }) => theme.mobile}) {

		width: 95%;
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 2rem;
		transform: translateY(0);


		& > div {
			align-items: center;
		}

		p {
			text-align: center;
		}

	}
`;

export const Line = styled.span`
	background-color: #ddd;
	width: 0.1rem;
	height: 4rem;


	@media screen and (max-width: ${({ theme }) => theme.mobile}) {
		display: none;
	}
`;