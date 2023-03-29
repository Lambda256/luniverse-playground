import Config from "./config";

export default class Metamask {
  static provider = window.ethereum;
  
	static isInstalled = (): boolean => {
		return !!this.provider && !!this.provider.isMetaMask;
	};

	static isConnected = async (): Promise<boolean> => {
		if (!this.isInstalled()) return false;
		return this.getAccounts().then((accounts) => !!accounts.length);
	};

	static getAccounts = async (): Promise<string[]> => {
		try {
			const accounts: string[] = await this.provider.request({
				method: "eth_accounts",
			});
			return accounts;
		} catch (error) {
			throw Error();
		}
	};

	static connect = async (): Promise<string[]> => {
		try {
			const accounts: string[] = await this.provider.request({
				method: "eth_requestAccounts",
			});
			return accounts;
		} catch (error) {
			throw Error();
		}
	};

	static switchToDemoChain = async (): Promise<string | void> => {
		try {
			// check if the chain to connect to is installed
			return await window.ethereum.request({
				method: 'wallet_switchEthereumChain',
				params: [{ chainId: `0x${Config.CHAIN_ID.toString(16)}` }], // chainId must be in hexadecimal numbers
			});
		} catch (error) {
			// This error code indicates that the chain has not been added to MetaMask
			const err = error as MetamaskError
			if (err.code === 4902) {
				try {
					return await window.ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [
							{
								chainName: Config.CHAIN_NAME,
								chainId: `0x${Config.CHAIN_ID.toString(16)}`,
								rpcUrls: [Config.NETWORK_RPC_URL],
								nativeCurrency: {
									name: Config.CURRENCY_NAME,
									symbol: Config.CURRENCY_SYMBOL,
									decimals: Config.CURRENCY_DECIMAL,
								}
							},
						],
					});
				} catch (addError) {
					console.error(addError);
				}
			}
			console.error(error);
		}
	}
}
