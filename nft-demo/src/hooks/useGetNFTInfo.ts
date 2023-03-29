import { useQuery } from "@tanstack/react-query";
import { getNFTInfo } from "../apis/nft";
import { KEYS } from "../states/keys";

const useGetNFTInfo = (itemId: string) => {
	return useQuery([KEYS.ASYNC_NFT_INFO, itemId], () => getNFTInfo(itemId), {
		retry: false,
		suspense: true,
		onSuccess: () => {},
		onError: () => {},
	});
};

export default useGetNFTInfo;
