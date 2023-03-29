import React, { useEffect, useState } from "react";
import {
	AddIcon,
	Container,
	Content,
	ItemH1,
	ItemH3,
	ItemImg,
	ItemWrap,
} from "./styled";
import { useNavigate } from "react-router-dom";
import useGetItems from "../../hooks/useGetItems";

const Items = () => {
	const {defaultItems, userItems} = useGetItems();
	const [items, setItems] = useState([] as ItemData[])

	useEffect(() => {
		setItems([...userItems, ...defaultItems])
	}, [defaultItems, userItems])

	let navigate = useNavigate();

	// OnClick Handler
	const handleOnClickAdd = () => {
		navigate(`/items/create`);
	};

	const handleOnClickItem = (item: ItemData) => {
		navigate(`/items/${item.eventId}`);
	};

	return (
		<Container>
			<Content>
				<ItemWrap onClick={handleOnClickAdd}>
					<AddIcon />
				</ItemWrap>

				{items.map((item: ItemData, index) => {
					return (
						<ItemWrap key={index} onClick={() => handleOnClickItem(item)}>
							<ItemH1>{item.plateNumber}</ItemH1>
							<ItemH3>{item.model}</ItemH3>
							<ItemH3>{item.year}</ItemH3>
							<ItemImg src={`/assets/images/vehicle${item.image}.png`} />
						</ItemWrap>
					);
				})}
			</Content>
		</Container>
	);
};

export default Items;
