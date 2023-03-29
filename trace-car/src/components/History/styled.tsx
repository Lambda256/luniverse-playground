import styled from "styled-components";

export const Container = styled.section`
	${({ theme }) => theme.components.container("column", "flex-start", "center")}
	margin: 0;
	padding: 0;
	padding-bottom: 2rem;
`;

export const Cards = styled.div`
	position: relative;
	width: 100%;
	padding-top: 5rem;

	/* Line */
	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: ${({ theme }) => theme.width.timeLine};

		height: 5rem;
		background: ${({ theme }) => theme.color.timeLine};
	}
`;

export const Card = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	position: relative;
	width: 100%;
	height: 30rem;

	/* Pointer */
	&::before {
		content: "";
		position: absolute;
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		top: 0;
		background: ${({ theme }) => theme.color.quinary};
		z-index: ${({ theme }) => theme.zIndex.pointer};
	}

	/* Line */
	&::after {
		content: "";
		position: absolute;
		width: ${({ theme }) => theme.width.timeLine};

		height: 100%;
		background: ${({ theme }) => theme.color.timeLine};
	}

	&:nth-child(odd) :is(div, time) {
		left: 52%;
	}
	&:nth-child(even) :is(div, time) {
		right: 52%;
	}

	&:nth-child(odd) > div {
		background: ${({ theme }) => theme.color.light};
		transform: translate3d(10rem, -5rem, 0) rotate(-10deg);
		&.show {
			opacity: 1;
			transform: none;
		}
	}
	&:nth-child(even) > div {
		background: ${({ theme }) => theme.color.light};
		transform: translate3d(-10rem, -5rem, 0) rotate(10deg);
		&.show {
			opacity: 1;
			transform: none;
		}
	}
`;

export const Time = styled.time`
	position: absolute;
	top: 0;
	height: 2rem;
	align-items: center;
`;

export const CardContent = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "flex-start")}
	position: absolute;
	top: 2rem;
	width: 25rem;
	height: fit-content;
	padding: 1rem;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	border-radius: 1rem;
	opacity: 0;
	transition: all 0.5s ease-in-out;
`;

export const Box = styled.div`
	margin: 0.25rem;
`;

export const H1 = styled.h1`
	font-size: 1.2rem;
`;

export const Description = styled.p`
	max-width: 23rem;
	font-size: 1.2rem;
	color: ${({ theme }) => theme.color.quaternary};
	max-height: 5.5rem;
	overflow-wrap: break-word;
	overflow: auto;
`;

export const CreatedIcon = styled.div`
	position: relative;
	width: 6.5rem;
	height: 6.5rem;
	background: ${({ theme }) => theme.color.bg};
	border-radius: 50%;
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	z-index: 1;
`;

export const CreatedText = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	transform: translate(-50%, -50%);
	width: 5.5rem;
	height: 5.5rem;
	background: ${({ theme }) => theme.color.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	border-radius: 50%;
`;

export const CreatedCard = styled.div`
	${({ theme }) => theme.mixins.gridBox("column", "flex-start", "flex-start")}

	grid-template-columns: repeat(2, 1fr);
	position: relative;
	top: -3rem;
	width: 25rem;
	gap: 1rem;
	padding: 2rem;
	padding-top: 3.5rem;
	background: ${({ theme }) => theme.color.light};
	box-shadow: ${({ theme }) => theme.boxShadow.style1};
	border-radius: 1rem;
	transition: all 0.5s ease-in-out;
	z-index: 0;
	opacity: 0;

	&>div:last-child {
		grid-column-end: span 2;
	}

	&.show {
		opacity: 1;
		transform: none;
	}
`;

export const CreatedAt = styled.time`
	position: absolute;
	top: 0;
`;

export const ScanLink = styled.a`
	
`;
