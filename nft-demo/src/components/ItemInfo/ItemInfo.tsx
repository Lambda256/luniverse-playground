import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGetNFTInfo from "../../hooks/useGetNFTInfo";
import Config from "../../utils/config";
import Empty from "../Empty";
import Loading from "../Loading";
import {
	Container,
	Content,
	Img,
	ImgBox,
	InfoWrap,
	Name,
	PropertiesWrap,
	PropertyBox,
	PropertyText,
	PropertyTextBox,
	TextBox,
	TextWrap,
	Title,
	Url,
	Value,
} from "./styled";

const ItemInfo = () => {
	const { itemId } = useParams();
	const [scanLink, setScanLink] = useState('')
	if (!itemId) return <Empty />;

	const getNftInfo = useGetNFTInfo(itemId);
	if (getNftInfo.isLoading) return <Loading />;

	const nftInfo = getNftInfo.data;
	if (!nftInfo) return <Empty />;

	useEffect(() => {
		if(!!nftInfo.token.transactionHash)
			setScanLink(`https://sidescan.luniverse.io/chains/${Config.ENVIRONMENT_ID}/transactions/${nftInfo.token.transactionHash}`)
	}, [nftInfo.token.transactionHash])

	return (
		<Container>
			<InfoWrap>
				<Title>NFT Info</Title>
				<Content>
					<ImgBox>
						<Img src={nftInfo.token.metadata.image} />
					</ImgBox>
					<TextWrap>
						<TextBox>
							<Name>Item ID</Name>
							<Value>{nftInfo.token.id}</Value>
						</TextBox>
						<TextBox>
							<Name>Token ID</Name>
							<Value>{nftInfo.token.tokenId}</Value>
						</TextBox>
						<TextBox>
							<Name>Edition Number</Name>
							<Value>
								#{nftInfo.token.editionNo} / {nftInfo.token.metadata.editionMax}{" "}
							</Value>
						</TextBox>
						<TextBox>
							<Name>Metadata ID</Name>
							<Value>{nftInfo.token.metadata.id}</Value>
						</TextBox>
						<TextBox>
							<Name>Name</Name>
							<Value>{nftInfo.token.metadata.name}</Value>
						</TextBox>
						<TextBox>
							<Name>Description</Name>
							<Value>{nftInfo.token.metadata.description}</Value>
						</TextBox>
						<TextBox>
							<Name>Created Date</Name>
							<Value>{nftInfo.token.metadata.createdDate}</Value>
						</TextBox>
						<TextBox>
							<Name>Scan Link</Name>
							<Value>
								<Url href={scanLink} target="_blank">
									{scanLink}
								</Url>
							</Value>
						</TextBox>
						<TextBox>
							<Name>Token URI</Name>
							<Value>
								<Url href={nftInfo.token.tokenUri} target="_blank">
									{nftInfo.token.tokenUri}
								</Url>
							</Value>
						</TextBox>
						<PropertiesWrap>
							{!!nftInfo.token.metadata.properties.length && (
								<TextBox>
									<Name>Properties</Name>
								</TextBox>
							)}
							{nftInfo.token.metadata.properties.map((property, index) => (
								<PropertyBox
									key={
										property.displayType +
										property.type +
										property.value +
										index
									}
								>
									<PropertyTextBox>
										<PropertyText>Display Type</PropertyText> :{" "}
										<PropertyText>{property.displayType}</PropertyText>
									</PropertyTextBox>
									<PropertyTextBox>
										<PropertyText>Type</PropertyText> :{" "}
										<PropertyText>{property.type}</PropertyText>
									</PropertyTextBox>
									<PropertyTextBox>
										<PropertyText>Value</PropertyText> :{" "}
										<PropertyText>{property.value}</PropertyText>
									</PropertyTextBox>
								</PropertyBox>
							))}
						</PropertiesWrap>
					</TextWrap>
				</Content>
			</InfoWrap>
		</Container>
	);
};

export default ItemInfo;
