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
}
