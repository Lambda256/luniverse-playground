export {};

declare global {
	/* Type of Property */
	interface Property {
		displayType: string;
		type: string;
		value: string;
	}

	/* Type of input data for minting */
	interface NFTInputData {
		image: FormData | null;
		name: string;
		description: string;
		maxMintLimit: number;
		editionNo: number;
		metadataId?: string;
	}

	/* Type of Upload Media Response */
	interface UploadMediaResponse {
		result?: boolean;
		status?: number;
		data?: {
			id: string;
			originalFilename: string;
			mimetype: string;
			size: number;
			mediaUrl: string;
			createdAt: string;
		};
		code?: string;
		statusCode?: number;
		message?: string;
		error?: string;
	}

	/* Type of Upload Metadata Response */
	interface UploadMetadataResponse {
		code: string;
		data?: UploadMetadataResponseData;
		message: string;
	}

	/* Type of Upload Media Response's data */
	interface UploadMetadataResponseData {
		id: string;
		name: string;
		createdDate?: string;
		image: string;
		imageHash: string;
		description: string;
		properties: Property[];
		editionMax: number;
		createdAt: string;
		onChainProperties: Property;
	}

	/* Type of Get Metadata Response */
	interface GetMetadataResponse {
		result: string;
		status: number;
		data?: GetMetadataResponseData;
		code: string;
	}

	/* Type of Get Media Response's data */
	interface GetMetadataResponseData {
		id: string;
		name: string;
		createdDate?: string;
		image: string;
		imageHash: string;
		description: string;
		properties: Property[];
		editionMax: number;
		createdAt: string;
		onChainProperties: Property;
		baseUri: string | null;
	}

	/* Type of MetaData */
	interface MetaData {
		name: string;
		createdDate: string;
		image: string;
		description: string;
		properties: Property[];
		maxMintLimit: number;
		onChainProperties: Property;
	}

	/* Type of Get NFTs Response */
	interface GetMyNFTsReponse {
		result: boolean;
		status: number;
		data: {
			count: string;
			page: number;
			rpp: number;
			items: NFTItem[];
		};
		code: string;
	}

	/* Type of NFT item */
	interface NFTItem {
		id: string;
		currencyCode: string;
		tokenId: string;
		issuedTo: string;
		transactionHash: string;
		transactionStatus: string;
		currentOwner: string;
		lastTransactionHash: string;
		editionNo: string;
		metadata: UploadMetadataResponseData;
		contractName: string;
		contractAddress: string;
		tokenUri: string;
		createdBy: {
			accountId: string;
			iamUserId: string;
		};
		createdAt: string;
		callbackUrl: string;
		callbackStatus: string;
		callbackRetryCount: string;
	}

	/* Type of Get NFT's information Response */
	interface GetNFTInfoReponse {
		result: boolean;
		status: number;
		data: { token: NFTItem };
		code: string;
	}
}
