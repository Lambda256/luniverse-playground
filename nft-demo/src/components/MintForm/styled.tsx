import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

export const Container = styled.main`
	${({ theme }) => theme.components.container("column", "center", "center")}
`;

export const FormWrap = styled.div`
	position: relative;
	top: 0;
	width: ${({theme}) => theme.width.lg};
	background: ${({ theme }) => theme.color.bg};
	box-shadow: ${({ theme }) => theme.boxShadow.style2};
	border-radius: 1rem;
	padding: 2rem;
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

export const Form = styled.form`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	gap: 1.5rem;
	position: relative;
`;

export const ImgInputWrap = styled.section`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
	width: 60%;
	height: 18rem;
`;

export const ImgUploadBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
	width: 100%;
	height: 100%;
`;

export const ImgUploadLabel = styled.label<MintComponent.ImgUploadLabel>`
	width: 100%;
	height: 80%;
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")};
	border: ${({ isSelected }) => (isSelected ? "none" : "0.2rem dotted black")};
	border-radius: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

export const UploadImg = styled.img`
	height: 100%;
	object-fit: cover;
`;

export const UploadImgTitle = styled.label`
	height: 10%;
	font-size: 1rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};
`;

export const ImgUploadInput = styled.input`
	width: 0;
	height: 0;
	padding: 0;
	overflow: hidden;
	border: 0;
`;

export const TextInputWrap = styled.section`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	gap: 2rem;
	width: 60%;
`;

export const InputBox = styled.div`
	${({ theme }) =>
		theme.mixins.flexBox("column", "space-between", "flex-start")}
	width: 100%;
`;

export const InputLabel = styled.label<MintComponent.InputLabel>`
	color: ${({ theme }) => theme.color.dark};
	font-size: 1.2rem;
	font-weight: ${({ theme }) => theme.fontWeight.semiBold};

	&::after {
		content: "*";
		${({ required }) => !required && "display: none"};
		position: absolute;
		font-size: 1.2rem;
		color: red;
		opacity: 0.5;
	}

	@media ${({ theme }) => theme.breakpoint.sm} {
		font-size: 1rem;
	}
`;

export const Input = styled.input`
	width: 100%;
	color: ${({ theme }) => theme.color.quaternary};
	font-size: 1.5rem;
	font-weight: ${({ theme }) => theme.fontWeight.medium};
	background: none;
	border: none;
	border-bottom: 2px solid ${({ theme }) => theme.color.dark};
	transition: all 0.2s ease-in-out;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&:focus {
		outline: none;
		color: ${({ theme }) => theme.color.dark};
		border-bottom: 2px solid ${({ theme }) => theme.color.tertiary};
	}

	@media ${({ theme }) => theme.breakpoint.lg} {
		font-size: 1.2rem;
	}
`;

export const MetadataInputBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "flex-end", "center")}
	width: 100%;
	gap: 1rem;
`

export const PropertiesWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	margin: 1rem 0;
	gap: 1rem;
	width: 100%;
`;

export const PropertyBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "space-around", "center")}
	padding: 1rem;
	width: 100%;
	height: 10rem;
	border: 2px ${({ theme }) => theme.color.dark} solid;
	border-radius: 1rem;
	transition: all 0.2s ease-in-out;
`;

export const PropertyTextWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "space-around", "center")}
	width: 90%;
	height: 100%;
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

export const RemoveIconBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "space-around", "center")}
	height: 100%;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const RemoveIcon = styled(AiOutlineMinusCircle)`
	font-size: 2rem;
	color: ${({ theme }) => theme.color.dark};

	&:hover {
		cursor: pointer;
	}
`;

export const AddForm = styled.form`
	${({ theme }) => theme.mixins.flexBox("column", "center", "center")}
	width: 60%;
	margin: auto;
	`;

export const AddWrap = styled.section`
	${({ theme }) => theme.mixins.flexBox("row", "space-around", "center")}
	width: 100%;
	height: 10rem;
	padding: 1rem;
	border: 2px ${({ theme }) => theme.color.quaternary} solid;
	border-radius: 1rem;
	transition: all 0.2s ease-in-out;
`;


export const AddInputWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("column", "space-around", "center")}
	width: 90%;
	height: 100%;
`;

export const AddInputBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "center", "center")}
	gap: 1rem;
	width: 80%;
	height: 2rem;
`;

export const AddInputLabel = styled.label<MintComponent.InputLabel>`
	width: 100%;
	color: ${({ theme }) => theme.color.dark};
	font-size: 1.2rem;
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	text-align: center;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const AddInput = styled.input`
	width: 100%;
	background: none;
	border: none;
	border-bottom: 2px solid ${({ theme }) => theme.color.dark};
	font-size: 1.2rem;
	text-align: center;
	transition: all 0.2s ease-in-out;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;

	&:focus {
		outline: none;
		color: ${({ theme }) => theme.color.dark};
		border-bottom: 2px solid ${({ theme }) => theme.color.tertiary};
	}
`;

export const AddIconBox = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "space-around", "center")}
	height: 100%;
	justify-content: flex-end;
	align-items: flex-end;
`;

export const AddIcon = styled(AiOutlinePlusCircle)`
	font-size: 2rem;
	color: ${({ theme }) => theme.color.quaternary};
	text-align: end;

	&:hover {
		cursor: pointer;
	}
`;

export const BtnWrap = styled.div`
	${({ theme }) => theme.mixins.flexBox("row", "flex-end", "center")}
	margin-top: 3rem;
	padding-right: 2rem;
`;

export const Btn = styled.button`
	font-size: 1.2rem;
	text-decoration: none;
	border: none;
	border-radius: 0.75rem;
	padding: 0.5rem 1rem;
	transition: all 0.3s ease-in-out;
	color: ${({ theme }) => theme.color.white};
	background: ${({ theme, disabled }) => disabled ? theme.color.black : theme.color.primary};
	
	:enabled {
		cursor: pointer;
		&:hover {
			transform: scale(1.04);
			background: ${({ theme }) => theme.color.quaternary};
		}
	}

	@media ${({ theme }) => theme.breakpoint.lg} {
		font-size: 1rem;
		padding: 0.75rem 1rem;
	}
`;