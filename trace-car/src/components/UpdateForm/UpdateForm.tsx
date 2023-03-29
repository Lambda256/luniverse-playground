import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetItem from "../../hooks/useGetItem";
import useUpdateItem from "../../hooks/useUpdateItem";

import Config from "../../utils/config";
import Empty from "../Empty";
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

const UpdateForm = () => {
	const navigate = useNavigate();
	const { eventId } = useParams(); // Get dynamic params from current URL
	const { isLoading, itemData, itemResonse, itemHistoryResponse } = useGetItem(eventId) // Fetch selected item data matched by event id
	const [inputData, setInputData] = useState(itemData);
	const updateItem = useUpdateItem(inputData)
	const [recentItemData, setRecentItemData] = useState(itemData); // selected item state

	// Show recent updated history if it exists
	useEffect(() => {
		if (!!itemHistoryResponse.data && !!itemHistoryResponse.data.length) {
			const itemHistories = itemHistoryResponse.data.sort((prev, curr) => Number(curr.timestamp) - Number(prev.timestamp))
			const lastUpdatedData = JSON.parse(itemHistories[0].data);
			setRecentItemData(lastUpdatedData);
			setInputData(lastUpdatedData)
		}
	}, [isLoading]);

	// main action for submit data
	const submitData = () => {
		const inputForm: HTMLFormElement | null =
			document.querySelector("#input-form");

		// Check if required fields are filled out
		if (inputForm === null) return;
		if (!inputForm.checkValidity()) {
			inputForm.reportValidity();
			return;
		}
		
		updateItem.mutate();
		
		navigate(`../`);
	};

	// OnClick Handlers
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

	if (!isLoading && !itemData.id) return <Empty />;

	return (
		<Container>
			<FormWrap>
				<Title>Update information</Title>
				<ImgWrap>
					<IMG src={`/assets/images/vehicle${recentItemData.image}.png`} />
				</ImgWrap>
				<Form id="input-form" onKeyDown={handleOnEnter} onChange={handleOnChangeInputData}>
					<InputBox>
						<InputLabel htmlFor="owner" required>
							Owner
						</InputLabel>
						<Input
							id="owner"
							required
							textTransform="uppercase"
							defaultValue={Config.USER_NAME}
							key={Config.USER_NAME}
						/>
					</InputBox>
					{/* Input1 end */}
					<InputBox>
						<InputLabel htmlFor="plate" required={true}>
							Plate Number
						</InputLabel>
						<Input
							id="plate"
							required
							textTransform="uppercase"
							defaultValue={recentItemData.plateNumber}
							key={recentItemData.plateNumber}
						/>
					</InputBox>
					{/* Input2 end */}
					<InputBox>
						<InputLabel htmlFor="model">Model</InputLabel>
						<Input
							id="model"
							required
							textTransform="uppercase"
							readOnly={true}
							defaultValue={recentItemData.model}
							key={recentItemData.model}
						/>
					</InputBox>
					{/* Input3 end */}
					<InputBox>
						<InputLabel htmlFor="year">Year</InputLabel>
						<Input
							id="year"
							type="number"
							min="1900"
							max="2099"
							step="1"
							required
							readOnly={true}
							defaultValue={recentItemData.year}
							key={recentItemData.year}
						/>
					</InputBox>
					{/* Input4 end */}
					<InputBox>
						<InputLabel htmlFor="mileage" required={true}>
							Mileage (km)
						</InputLabel>
						<Input
							id="mileage"
							type="number"
							min={recentItemData.mileage}
							required
							defaultValue={recentItemData.mileage}
							key={recentItemData.mileage}
						/>
					</InputBox>
					{/* Input5 end */}
					<InputBox>
						<InputLabel htmlFor="vin">VIN</InputLabel>
						<Input
							id="vin"
							type="text"
							readOnly
							textTransform="uppercase"
							value={recentItemData.vin}
						/>
					</InputBox>
					{/* Input6 end */}
					<InputBox>
						<InputLabel htmlFor="description">Description</InputLabel>
						<Input
							id="description"
							type="text"
							defaultValue={recentItemData.description}
							key={recentItemData.description}
						/>
					</InputBox>
					{/* Input7 end */}
				</Form>
				<BtnWrap>
					<Btn onClick={handleOnClickSubmit} disabled={Config.USER_NAME !== itemResonse.data?.userName}>
						Submit
					</Btn>
				</BtnWrap>
			</FormWrap>
		</Container>
	);
};

export default UpdateForm;
