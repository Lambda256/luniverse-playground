namespace Config {
	export const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
	export const CONTRACT_ID = import.meta.env.VITE_CONTRACT_ID;
	export const ACCOUNT_ADDRESS = import.meta.env.VITE_ACCOUNT_ADDRESS;
	export const ENVIRONMENT_ID = "1666232515295616488";

	export const CHAIN_NAME = "Luniverse Testnet";
	export const CHAIN_ID = 617317;
	export const NETWORK_RPC_URL = `https://baas-rpc.luniverse.io:18545/?lChainId=${ENVIRONMENT_ID}`;
	export const CURRENCY_NAME = "LUK";
	export const CURRENCY_SYMBOL = "LUK";
	export const CURRENCY_DECIMAL = 18;

	export const BASE_URL = "https://api.luniverse.io/svc/v2";

	export const AUTH_TOKEN_URL = "/auth-tokens";

	export const NFT_MEDIA_URL = "/nft/media";
	export const NFT_METADATA_URL = "/nft/metadata";
	export const NFT_TOKENS_URL = `/nft/contracts/${CONTRACT_ID}/tokens`;
}

export default Config;
