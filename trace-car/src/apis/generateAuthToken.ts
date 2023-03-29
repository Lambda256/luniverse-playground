import axios, { AxiosResponse } from "axios";
import Config from "../utils/config";

/**
 * Request to generate a new auth token
 * @param apiKeys api keys and expiry data submitted by user
 * @returns new auth token
 */
const generateAuthToken = (apiKeys: APIKeys): Promise<string | null> =>
	axios
		.request({
			baseURL: Config.BASE_URL,
			url: Config.AUTH_TOKEN_URL,
			method: "post",
			data: {
				...apiKeys,
			},
		})
		.then((res: AxiosResponse<AuthTokenResponse, APIKeys>) => {
			if (res.data.data) return res.data.data.authToken.token;
			else return null
		});

export default generateAuthToken;
