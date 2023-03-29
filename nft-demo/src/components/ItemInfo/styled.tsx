import styled from "styled-components";

export const Container = styled.main`
	${({ theme }) => theme.components.container("column", "center", "center")}
`;

export const InfoWrap = styled.div`
	position: relative;
	top: 0;
	width: ${({theme}) => theme.width.lg};
	background: ${({ theme }) => theme.color.bg};
	box-shadow: ${({ theme }) => theme.boxShadow.style2};
	border-radius: 1rem;
	padding: 1rem;
	overflow: hidden;

	@media ${({ theme }) => theme.breakpoint.lg} {
		width: ${({ theme }) => theme.width.xs};
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		width: ${({ theme }) => theme.width.xxs};
	}
`;

export const Title = styled.h1`
	${({ theme }) => theme.components.title("2rem")}
	color: ${({ theme }) => theme.color.dark};
	text-align: center;
	margin-bottom: 1rem;
`;

export const Content = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	gap: 1rem;
	position: relative;
`;

export const ImgBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
	width: 60%;
	height: 18rem;
	margin-bottom: 2rem;
`;

export const Img = styled.img`
	height: 100%;
	object-fit: cover;
`;

export const TextWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	gap: 1.5rem;
	width: 60%;
`;

export const TextBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "space-between", "center")}
	width: 100%;
`;

export const Name = styled.div`
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const Value = styled.div`
	width: 40%;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1rem;
`;

export const Url = styled.a``;



export const PropertiesWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	gap: 1rem;
	width: 100%;
`;

export const PropertyBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "space-around", "center")}
	padding: 1rem;
	width: 100%;
	height: 10rem;
	border: 2px ${({ theme }) => theme.color.dark} solid;
	border-radius: 1rem;
	transition: all 0.2s ease-in-out;
`;

export const PropertyTextBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	gap: 1rem;
	width: 80%;
	height: 2rem;
`;

export const PropertyText = styled.h4`
	width: 100%;
	color: ${({ theme }) => theme.color.dark};
	font-size: 1.2rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;