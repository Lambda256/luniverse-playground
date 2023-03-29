import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import getItems from "../apis/getItems";
import { Keys } from "../states/keys";
import Config from "../utils/config";

const useGetItems = () => {
	const [defaultItems, setDefaultItems] = useState([] as ItemData[])
	const [userItems, setUserItems] = useState([] as ItemData[])

	const defaultItemsResponse = useQuery(
		[Keys.DEFAULT_ITEMS_ASYNC],
		() =>
			getItems({
				eventName: Config.CREATE,
				userName: Config.DEFAULT_ITEMS_USER_NAME,
				objectId: Config.DEFAULT_ITEMS_OBJECT_ID,
			}),
		{
			retry: 0,
			suspense: true,
			onSuccess: () => {},
			onError: (error: AxiosError<AxiosErrorData>) => {
				console.log(
					`Fetching default items failed\n${error.message}\n${error.response?.data.message}`
				);
			},
		}
	);
	
	const userItemsResponse = useQuery(
		[Keys.USER_ITEMS_ASYNC],
		() =>
			getItems({
				eventName: Config.CREATE,
				userName: Config.USER_NAME,
				objectId: Config.USER_ITEMS_OBJECT_ID,
			}),
		{
			retry: 0,
			suspense: true,
			onSuccess: () => {},
			onError: (error: AxiosError<AxiosErrorData>) => {
				console.log(
					`Fetching user items failed\n${error.message}\n${error.response?.data.message}`
				);
			},
		}
	);

	useEffect(() => {
		// Get item data from data fetching response
		if (defaultItemsResponse.data) {
			setDefaultItems(
				defaultItemsResponse.data.map((item: TraceItem) => {
					const data = JSON.parse(item.data);
					const txHash = JSON.parse(item.tx.receipt)?.txHash;
					const eventId = item.eventId;
					return { ...data, txHash, eventId };
				}).reverse()
			);
		}
	}, [defaultItemsResponse.isLoading]);


	useEffect(() => {
		// Get item data from data fetching response
		if (userItemsResponse.data) {
			setUserItems(
				userItemsResponse.data.map((item: TraceItem) => {
					const data = JSON.parse(item.data);
					const txHash = JSON.parse(item.tx.receipt)?.txHash;
					const eventId = item.eventId;
					return { ...data, txHash, eventId };
				}).reverse()
			);
		}
	}, [userItemsResponse.isLoading]);

	return {defaultItems, userItems, defaultItemsResponse, userItemsResponse};
};
export default useGetItems;
