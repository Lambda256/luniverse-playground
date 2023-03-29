import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { mintERC721, uploadMediaFile, uploadMetadata } from "../apis/nft";
import { KEYS } from "../states/keys";
import { PropertiesState } from "../states/recoil/properties";
import { AccountsState } from "../states/recoil/accounts";
import { getNowYYYYMMDD } from "../utils";

const useMint = (inputData: NFTInputData) => {
	const navigate = useNavigate();
	const properties = useRecoilValue(PropertiesState);
	const accounts = useRecoilValue(AccountsState)

	return useMutation(
		[KEYS.ASYNC_NFT_MINT, inputData],
		async () => {
			let metadataId;
			if(!inputData.metadataId) {
				const mediaId = await uploadMediaFile(inputData.image);
				if (!mediaId) return null;
	
				metadataId = await uploadMetadata({
					name: inputData.name,
					description: inputData.description,
					maxMintLimit: inputData.maxMintLimit,
					image: mediaId,
					createdDate: getNowYYYYMMDD(),
					properties: properties,
					onChainProperties: {} as Property,
				});
				if (!metadataId) return null;
			} else metadataId = inputData.metadataId

			const nft = await mintERC721(metadataId, inputData.editionNo, accounts[0]);

			return nft;
		},
		{
			retry: false,
			onSuccess: () => {
				alert("NFT was minted successfully!");
				navigate("/mypage");
			},
			onError: (error: AxiosError<AxiosErrorData>) => {
				alert(
					`Failed to mint. \n${error.message}\n${error.response?.data.message}`
				);
				window.location.reload();
			},
		}
	);
};

export default useMint;
