import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import generateAuthToken from "../apis/generateAuthToken";
import { Keys } from "../states/keys";

const useGenerateAuthToken = () =>
	useMutation({
		mutationKey: [Keys.AUTH_TOKEN_ASYNC],
		mutationFn: (apiKeys: APIKeys) => generateAuthToken(apiKeys),
		onSuccess: () => {
			alert("Created new auth token successfully!");
		},
		onError: (error: AxiosError<AxiosErrorData>) => {
			alert(
				`Creating auth token failed\n${error.message}\n${error.response?.data.message}`
			);
		},
	});

export default useGenerateAuthToken;
