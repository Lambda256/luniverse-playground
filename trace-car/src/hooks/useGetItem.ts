import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import getItemHistory from "../apis/getItemHistory";
import getItemWithEventId from "../apis/getItemWithEventId";
import { Keys } from "../states/keys";

const useGetItem = (eventId: string | undefined) => {
	const itemResonse = useQuery(
		[Keys.SELECTED_ITEM_ASYNC, eventId],
		() => getItemWithEventId(eventId),
		{
			retry: 0,
			suspense: true,
			enabled: !!eventId,
			onSuccess: () => {},
			onError: (error: AxiosError<AxiosErrorData>) => {
				console.log(
					`Fetching items failed\n${error.message}\n${error.response?.data.message}`
				);
			},
		}
	);

  
	let itemData = {} as ItemData;
	if (!!itemResonse.data && !!itemResonse.data.tx) {
		itemData = JSON.parse(itemResonse.data?.data);
		itemData.txHash = JSON.parse(itemResonse.data.tx.receipt).txHash;
	}

	const itemHistoryResponse =
		useQuery([Keys.HISTORY_DATA_ASYNC, itemData.id], () => getItemHistory(itemData.id), {
			retry: 0,
			suspense: true,
			enabled: !!itemData.id,
			onSuccess: () => {},
			onError: (error: AxiosError<AxiosErrorData>) => {
				console.log(
					`Fetching default items failed\n${error.message}\n${error.response?.data.message}`
				);
			},
		});

	const isLoading = itemResonse.isLoading || itemHistoryResponse.isLoading

  return {isLoading, itemData, itemResonse, itemHistoryResponse}
};
export default useGetItem;
