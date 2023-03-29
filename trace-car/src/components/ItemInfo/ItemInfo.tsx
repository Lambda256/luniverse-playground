import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetItem from "../../hooks/useGetItem";
import Config from "../../utils/config";
import Empty from "../Empty";
import {
	Btn,
	BtnWrap,
	Container,
	ContentWrap,
	IMG,
	ImgWrap,
	Span,
	Label,
	ContentBox,
	Title,
	InfoWrap,
	TimeLine,
} from "./styled";

const ItemInfo = () => {
	const navigate = useNavigate();
	const { eventId } = useParams(); // Get dynamic params from current URL
	const { isLoading, itemData, itemResonse, itemHistoryResponse } = useGetItem(eventId); // Fetch selected item data matched by event id
	const [recentItemData, setRecentItemData] = useState(itemData); // selected item state

	// Show recent updated history if it exists
	useEffect(() => {
		if (!!itemHistoryResponse.data && !!itemHistoryResponse.data.length) {
			const itemHistories = itemHistoryResponse.data.sort(
				(prev, curr) => Number(curr.timestamp) - Number(prev.timestamp)
			);
			const lastUpdatedData = JSON.parse(itemHistories[0].data);
			setRecentItemData(lastUpdatedData);
		}
	}, [itemHistoryResponse.isLoading]);

	const handleOnClickUpdateBtn = () => {
		navigate(`/items/${eventId}/update`)
	}

	if (!isLoading && !itemData.id) return <Empty />;

	return (
		<Container>
			<InfoWrap>
				<Title> Item Info </Title>
				<ImgWrap>
					<IMG src={`/assets/images/vehicle${recentItemData.image}.png`} />
				</ImgWrap>
				<ContentWrap>
					<ContentBox>
						<Label htmlFor="owner">Owner</Label>
						<Span id="owner" textTransform="uppercase">
							{recentItemData.owner}
						</Span>
					</ContentBox>
					{/* Span1 end */}
					<ContentBox>
						<Label htmlFor="plate">Plate Number</Label>
						<Span id="plate" textTransform="uppercase">
							{recentItemData.plateNumber}
						</Span>
					</ContentBox>
					{/* Span2 end */}
					<ContentBox>
						<Label htmlFor="model">Model</Label>
						<Span id="model" textTransform="uppercase">
							{recentItemData.model}
						</Span>
					</ContentBox>
					{/* Span3 end */}
					<ContentBox>
						<Label htmlFor="year">Year</Label>
						<Span id="year">{recentItemData.year}</Span>
					</ContentBox>
					{/* Span4 end */}
					<ContentBox>
						<Label htmlFor="mileage">Mileage (km)</Label>
						<Span id="mileage">{recentItemData.mileage}</Span>
					</ContentBox>
					{/* Span5 end */}
					<ContentBox>
						<Label htmlFor="vin">VIN</Label>
						<Span id="vin" textTransform="uppercase">
							{recentItemData.vin}
						</Span>
					</ContentBox>
					{/* Span6 end */}
					<ContentBox>
						<Label htmlFor="description">Description</Label>
						<Span id="description">{recentItemData.description}</Span>
					</ContentBox>
					{/* Span7 end */}
				</ContentWrap>
				<BtnWrap>
					<Btn onClick={handleOnClickUpdateBtn} disabled={Config.USER_NAME !== itemResonse.data?.userName}>
						Update
					</Btn>
				</BtnWrap>
			</InfoWrap>
			<TimeLine />
		</Container>
	);
};

export default ItemInfo;
