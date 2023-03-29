import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetItems from "../../hooks/useGetItems";
import Empty from "../Empty";
import {
	Container,
	Content,
	ItemH1,
	ItemH3,
	ItemImg,
	ItemWrap,
	Title,
} from "./styled";

const MyItem = () => {
	let navigate = useNavigate();
	const {userItems, userItemsResponse} = useGetItems();
	
	// OnClick Handler
	const handleOnClickItem = (item: ItemData) => {
		navigate(`/items/${item.eventId}`);
	};

	if(userItems.length === 0) return(
		<>
			<Empty/>
		</>
	)

	return (
		<>
			<Container>
				{/* <Title>My Page</Title> */}
				<Content>
					{userItems.map((item, index) => (
						<ItemWrap key={index} onClick={() => handleOnClickItem(item)}>
							<ItemH1>{item.plateNumber}</ItemH1>
							<ItemH3>{item.model}</ItemH3>
							<ItemH3>{item.year}</ItemH3>
							<ItemImg src={`/assets/images/vehicle${item.image}.png`} />
						</ItemWrap>
					))}
				</Content>
			</Container>
		</>
	);
};

export default MyItem;
