import axios, { AxiosResponse } from "axios";
import Config from "../utils/config";

/**
 * Request to fetch items by objectId and userName
 * @param params {eventName, userName, objectId}
 * @returns items data matching params
 */
const getItems = (params: GetItemAxiosParams): Promise<TraceItem[] | null> =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.EVENTS_URL,
			method: "get",
			headers: { Authorization: `Bearer ${Config.AUTH_TOKEN}` },
			params: {...params, rpp: 100},
		})
		.then((res: AxiosResponse<TraceItemsResponse>) => {
			if (res.data.data) return res.data.data.events.items;
			else return null
		});

export default getItems;
