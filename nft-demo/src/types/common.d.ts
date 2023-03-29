export {};

declare global {
	/* Type of object with attributes */
	interface Params {
		[key: string]: any;
	}

	interface AxiosErrorData {
		code: string;
		message: string;
		result: boolean;
		status: number;
	}

	/* Type of Metamask */
	interface Window {
    ethereum: {
			isMetaMask: boolean;
			request: EthereumRequest;
			on: EthereumOn;
			removeListener: EthereumRemoveListener;
		};
  }

	type EthereumRequest = (arg: RequestArguments) => Promise<any>
	type EthereumOn =  (arg: string, callback: Function) => Promise<void>
	type EthereumRemoveListener = (arg: string, callback: Function) => void

	interface RequestArguments {
		method: string;
		params?: unknown[] | object;
	}

	interface MetamaskError {
		code: number;
	}

	interface AddEthereumChainParameter {
		chainId: string; // A 0x-prefixed hexadecimal string
		chainName: string;
		nativeCurrency: {
			name: string;
			symbol: string; // 2-6 characters long
			decimals: 18;
		};
		rpcUrls: string[];
		blockExplorerUrls?: string[];
		iconUrls?: string[]; // Currently ignored.
	}
}
