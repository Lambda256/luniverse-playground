import React, { useState } from "react";
import Config from "../../utils/config";
import {
	Btn,
	BtnWrap,
	Container,
	Form,
	FormWrap,
	IMG,
	ImgWrap,
	Input,
	InputLabel,
	InputBox,
	Title,
} from "./styled";
import {v4 as uuidv4} from "uuid"
import { getRandomNum } from "../../utils";
import useCreateItem from "../../hooks/useCreateItem";

const randomNumber = getRandomNum(10) // Get random number between 0 and 10

const InputForm: React.FC<InputFormComponent.InputForm> = () => {
	const [inputData, setInputData] = useState({
		id: uuidv4(),
		vin: "",
		image: randomNumber,
		owner: Config.USER_NAME,
		plateNumber: "",
		model: "",
		year: 0,
		mileage: 0,
		description: "",
	});
	const createNewItem = useCreateItem(inputData)

	// main action for submit data
	const submitData = () => {
		// Get inputForm element
		const inputForm: HTMLFormElement | null =
			document.querySelector("#input-form");

		// Check if required fields are filled out
		if (inputForm === null) return;
		if (!inputForm.checkValidity()) {
			inputForm.reportValidity();
			return;
		}

		createNewItem.mutate()
	}
	
	const handleOnClickSubmit = (e: React.MouseEvent) => {
		e.preventDefault();
		submitData();
	};

	// Set 'enter' to submit
	const handleOnEnter: React.KeyboardEventHandler<HTMLFormElement> = (e) => {
		if (e.key === "Enter") {
			submitData();
		}
	};

	// Handle input data
	const handleOnChangeInputData = (e: React.ChangeEvent<HTMLFormElement>) => {
		setInputData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
	};

	return (
		<Container>
			<FormWrap>
				<Title>Create your item</Title>
				<ImgWrap>
					<IMG src={`/assets/images/vehicle${randomNumber}.png`} />
				</ImgWrap>
				<Form id="input-form" onKeyDown={handleOnEnter} onChange={handleOnChangeInputData}>
					<InputBox>
						<InputLabel htmlFor="owner">Owner</InputLabel>
						<Input
							id="owner"
							readOnly
							placeholder="William"
							textTransform="uppercase"
							value={Config.USER_NAME}
						/>
					</InputBox>
					{/* Input1 end */}
					<InputBox>
						<InputLabel htmlFor="plate" required>
							Plate Number
						</InputLabel>
						<Input
							id="plateNumber"
							required
							placeholder="NY737ZN"
							textTransform="uppercase"
						/>
					</InputBox>
					{/* Input2 end */}
					<InputBox>
						<InputLabel htmlFor="model" required>
							Model
						</InputLabel>
						<Input
							id="model"
							required
							placeholder="Car model"
							textTransform="uppercase"
						/>
					</InputBox>
					{/* Input3 end */}
					<InputBox>
						<InputLabel htmlFor="year" required>
							Year
						</InputLabel>
						<Input
							id="year"
							type="number"
							min="1900"
							max="2099"
							step="1"
							required
							placeholder={`${new Date().getFullYear()}`}
						/>
					</InputBox>
					{/* Input4 end */}
					<InputBox>
						<InputLabel htmlFor="mileage" required>
							Mileage (km)
						</InputLabel>
						<Input
							id="mileage"
							type="number"
							min={0}
							required
							placeholder="0"
						/>
					</InputBox>
					{/* Input5 end */}
					<InputBox>
						<InputLabel htmlFor="vin" required>VIN</InputLabel>
						<Input
							id="vin"
							type="text"
							placeholder="Vehicle ID Number"
							textTransform="uppercase"
						/>
					</InputBox>
					{/* Input6 end */}
					<InputBox>
						<InputLabel htmlFor="description">Description</InputLabel>
						<Input
							id="description"
							type="text"
							placeholder="Tell us more details"
						/>
					</InputBox>
					{/* Input7 end */}
				</Form>
				<BtnWrap>
					<Btn to="" onClick={handleOnClickSubmit}>
						Submit
					</Btn>
				</BtnWrap>
			</FormWrap>
		</Container>
	);
};

export default InputForm;
