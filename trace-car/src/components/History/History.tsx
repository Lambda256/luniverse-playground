import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGetItem from "../../hooks/useGetItem";
import { secondsToTimeFormat } from "../../utils";
import {
	Box,
	Card,
	CardContent,
	Cards,
	Container,
	Description,
	H1,
	CreatedIcon,
	CreatedText,
	Time,
	CreatedCard,
	ScanLink,
} from "./styled";

const History = () => {
	const { eventId } = useParams(); // Get dynamic params from current URL : selected item's event ID
	const {isLoading, itemData, itemHistoryResponse} = useGetItem(eventId);

	// History elements scroll effects
	useEffect(() => {
		const contents = document.querySelectorAll(".content"); // history content box element

		// Check if history box element is on window display areas (only Y axis)
		const isElementShown = (el: Element) => {
			let rect = el.getBoundingClientRect();
			return rect.bottom <= window.innerHeight;
		};
		contents.forEach((content: Element) => {
			window.addEventListener("scroll", () => {
				if (isElementShown(content)) content.classList.add("show");
				else content.classList.remove("show");
			});
		});
	}, [isLoading]);

	return (
		<Container>
			<Cards>
				{itemHistoryResponse.data
					?.sort(
						(prev, curr) => Number(curr.timestamp) - Number(prev.timestamp)
					)
					.map((item, index) => {
						const itemData: ItemData = JSON.parse(item.data);
						let txHash = JSON.parse(item.tx?.receipt)?.txHash || "";
						if(!item.tx.receipt) itemHistoryResponse.refetch()
						return (
							<Card key={index}>
								<Time>{secondsToTimeFormat(Number(item.timestamp))}</Time>
								<CardContent className="content">
									<Box>
										<H1>Owner</H1>
										<Description>{itemData.owner}</Description>
									</Box>
									<Box>
										<H1>PlateNumber</H1>
										<Description>{itemData.plateNumber}</Description>
									</Box>
									<Box>
										<H1>Mileage</H1>
										<Description>{itemData.mileage}</Description>
									</Box>
									<Box>
										<H1>Description</H1>
										<Description>{itemData.description}</Description>
									</Box>
									<ScanLink
										href={`https://sidescan.luniverse.io/chains/2251976252273339850/transactions/${txHash}`}
										target="_blank"
									>
										Scan Link
									</ScanLink>
								</CardContent>
							</Card>
						);
					})}
			</Cards>

			<CreatedIcon>
				<CreatedText>
					<H1>Created</H1>
				</CreatedText>
			</CreatedIcon>
			<CreatedCard className="content">
				<Box>
					<H1>Owner</H1>
					<Description>{itemData.owner}</Description>
				</Box>
				<Box>
					<H1>Plate Number</H1>
					<Description>{itemData.plateNumber}</Description>
				</Box>
				<Box>
					<H1>Model</H1>
					<Description>{itemData.model}</Description>
				</Box>
				<Box>
					<H1>Year</H1>
					<Description>{itemData.year}</Description>
				</Box>
				<Box>
					<H1>Mileage</H1>
					<Description>{itemData.mileage}</Description>
				</Box>
				<Box>
					<H1>VIN</H1>
					<Description>{itemData.vin}</Description>
				</Box>
				<Box>
					<H1>Description</H1>
					<Description>{itemData.description}</Description>
				</Box>
				<ScanLink
					href={`https://sidescan.luniverse.io/chains/2251976252273339850/transactions/${itemData.txHash}`}
					target="_blank"
				>
					Scan Link
				</ScanLink>
			</CreatedCard>
		</Container>
	);
};

export default History;
