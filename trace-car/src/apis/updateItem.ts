import axios, { AxiosResponse } from "axios";
import Config from "../utils/config";

/**
 * Request to write a new event called "Update"
 * @param inputData item data submitted by user
 * @returns created event data or null
 */
const updateItem = (inputData: ItemData): Promise<TraceItem | null> =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.EVENTS_URL,
			method: "post",
			headers: { Authorization: `Bearer ${Config.AUTH_TOKEN}` },
			data: {
				eventName: Config.UPDATE,
				userName: Config.USER_NAME,
				objectId: Config.USER_ITEMS_OBJECT_ID,
				timestamp: Date.now() / 1000,
				data: JSON.stringify(inputData),
			},
		})
		.then((res: AxiosResponse<TraceItemResponse>) => {
			if (res.data) return res.data.data.event;
			else return null;
		});

export default updateItem;
