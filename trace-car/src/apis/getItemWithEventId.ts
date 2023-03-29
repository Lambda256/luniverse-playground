import axios, { AxiosResponse } from "axios";
import Config from "../utils/config";

/**
 * Request to fetch items by eventId
 * @param eventId 
 * @returns item data matching event id
 */
const getItemWithEventId = (eventId: string | undefined): Promise<TraceItem | null> =>
	axios
		.request({
			baseURL: Config.BASE_URL,
      url: Config.EVENTS_URL + `/${eventId}`,
      method: "get",
      headers: { Authorization: `Bearer ${Config.AUTH_TOKEN}` },
		})
		.then((res: AxiosResponse<TraceItemResponse>) => {
			if (res.data.data) return res.data.data.event;
			else return null
		});

export default getItemWithEventId;
