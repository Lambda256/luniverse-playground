import axios, { AxiosResponse } from "axios";
import Config from "../utils/config";

/**
 * Request to fetch item update history by item id
 * @param id item id
 * @returns item update history
 */
const getItemHistory = (id: string): Promise<TraceItem[] | null> =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.EVENTS_URL,
			method: "get",
			headers: { Authorization: `Bearer ${Config.AUTH_TOKEN}` },
			params: {
				eventName: Config.UPDATE,
				userName: Config.USER_NAME,
				objectId: Config.USER_ITEMS_OBJECT_ID,
				rpp: 100,
			},
		})
		.then((res: AxiosResponse<TraceItemsResponse>) => {
			if (res.data.data) return res.data.data.events.items.filter(
				(item) =>
					JSON.parse(item.data).id === id
			);
			else return null;
		});

export default getItemHistory;
