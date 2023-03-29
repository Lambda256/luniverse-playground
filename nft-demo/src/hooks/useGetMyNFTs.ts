import { useQuery } from "@tanstack/react-query";
import { useRecoilValue } from "recoil";
import { getMyNFTs } from "../apis/nft";
import { KEYS } from "../states/keys";
import { AccountsState } from "../states/recoil/accounts";

const useGetMyNFTs = () => {
	const accounts = useRecoilValue(AccountsState)

	return useQuery([KEYS.ASYNC_MY_NFTS, accounts], () => getMyNFTs(accounts[0]), {
		retry: false,
		suspense: true,
		onSuccess: () => {},
		onError: () => {},
	});
};

export default useGetMyNFTs;
