import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { AccountsState } from "../states/recoil/accounts";
import { shortAddress } from "../utils";
import Metamask from "../utils/metamask";
const INSTALL_TEXT = "Install MetaMask";
const CONNECT_TEXT = "Connect";

type Return = [string[], React.Dispatch<React.SetStateAction<string[]>>, string, boolean];

const useMetamask = (): Return => {
	const [buttonText, setButtonText] = useState(INSTALL_TEXT);
	const [isConnected, setIsConnected] = useState(false);
	const [accountsState, setAccountsState] = useRecoilState(AccountsState);

	// Check if metamask is connected every time accounts are changed
	useEffect(() => {
		Metamask.isConnected().then((result) => {
			setIsConnected(result);
		});

		if (Metamask.isInstalled())
			Metamask.getAccounts().then((accounts) => {
				if (accounts.length > 0 && !!accounts[0]) {
					setButtonText(shortAddress(accounts[0]));
				} else setButtonText(CONNECT_TEXT);
			});
	}, [accountsState]);

	// handling accounts changed
	useEffect(() => {
		const handleAccountsChanged = (newAccounts: string[]) => {
			setAccountsState(newAccounts);
		};
		
		if (Metamask.isInstalled()) {
			Metamask.getAccounts().then((accounts) => {
				if (accounts.length > 0) {
					setButtonText(shortAddress(accounts[0]));
          setAccountsState(accounts)
				} else setButtonText(CONNECT_TEXT);
			});
			Metamask.provider.on("accountsChanged", handleAccountsChanged);
		}

		return () => {
			if (Metamask.isInstalled())
				Metamask.provider.removeListener(
					"accountsChanged",
					handleAccountsChanged
				);
		};
	}, []);

	useEffect(() => {
		if (!!accountsState[0] && accountsState[0].startsWith("0x"))
      setButtonText(shortAddress(accountsState[0]))
	}, [buttonText])

	return [accountsState, setAccountsState, buttonText, isConnected];
};

export default useMetamask;
