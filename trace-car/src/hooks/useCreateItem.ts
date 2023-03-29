import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import createItem from "../apis/createItem";
import { Keys } from "../states/keys";

const useCreateItem = (inputData: ItemData) => {
	const navigate = useNavigate();
	return useMutation(
		[Keys.CREATE_USER_ITEM_ASYNC],
		() => createItem(inputData),
		{
			retry: false,
			onSuccess: () => {
				alert("The item was successfully created!");
				window.location.href = "/mypage";
			},
			onError: (error: AxiosError<AxiosErrorData>) => {
				alert(
					`Failed to create item\n${error.message}\n${error.response?.data.message}`
				);
				navigate("/items");
			},
		}
	);
};

export default useCreateItem;
