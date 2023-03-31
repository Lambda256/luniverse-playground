import axios, { AxiosResponse } from "axios";
import Config from "../utils/config";

export const uploadMediaFile = (
	file: FormData | null
): Promise<string | null> =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.NFT_MEDIA_URL,
			method: "post",
			headers: {
				Authorization: `Bearer ${Config.AUTH_TOKEN}`,
			},
			data: file,
		})
		.then((res: AxiosResponse<UploadMediaResponse, FormData>) => {
			if (res.data.data) return res.data.data.id;
			else return null;
		});

export const uploadMetadata = (metadata: MetaData): Promise<string | null> =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.NFT_METADATA_URL,
			method: "post",
			headers: {
				Authorization: `Bearer ${Config.AUTH_TOKEN}`,
			},
			data: metadata,
		})
		.then((res: AxiosResponse<UploadMetadataResponse, MetaData>) => {
			if (res.data.data) return res.data.data.id;
			else return null;
		});

export const getMetadata = (metadataId: string) =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.NFT_METADATA_URL + `/${metadataId}`,
			method: "get",
			headers: {
				Authorization: `Bearer ${Config.AUTH_TOKEN}`,
			},
		})
		.then((res: AxiosResponse<GetMetadataResponse>) => res.data.data);

export const mintERC721 = (
	metadataId: string,
	editionNo: number,
	account: string
) =>
	axios.request({
		baseURL: Config.BASE_URL,
		url: Config.NFT_TOKENS_URL,
		method: "post",
		headers: {
			Authorization: `Bearer ${Config.AUTH_TOKEN}`,
		},
		data: {
			issuedTo: account,
			metadataId: metadataId,
			editionNo: editionNo,
		},
	});

export const getMyNFTs = (account: string) => {
	if (!account) return null;
	return axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.NFT_TOKENS_URL,
			method: "get",
			headers: {
				Authorization: `Bearer ${Config.AUTH_TOKEN}`,
			},
			params: {
				currentOwner: account,
				rpp: 100,
			},
		})
		.then((res: AxiosResponse<GetMyNFTsReponse>) => res.data.data);
};

export const getNFTInfo = (itemId: string) =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.NFT_TOKENS_URL + `/${itemId}`,
			method: "get",
			headers: {
				Authorization: `Bearer ${Config.AUTH_TOKEN}`,
			},
		})
		.then((res: AxiosResponse<GetNFTInfoReponse>) => res.data.data);
