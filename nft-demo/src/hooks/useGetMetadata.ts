import { useQuery } from "@tanstack/react-query";
import { getMetadata } from "../apis/nft";
import { KEYS } from "../states/keys";

const useGetMetadata = (metadataId: string) => {
	return useQuery([KEYS.ASYNC_METADATA, metadataId], () => getMetadata(metadataId), {
		retry: false,
		enabled: false,
		onSuccess: () => {
			alert("Fetched metadata successfully!")
		},
		onError: () => {
			alert("Fetched metadata failed. Please check if the metadata id is valid and try again")
		},
	});
};

export default useGetMetadata;
