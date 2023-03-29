import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import updateItem from "../apis/updateItem";
import { Keys } from "../states/keys";

const useUpdateItem = (inputData: ItemData) => {
	const navigate = useNavigate();
	return useMutation(
		[Keys.UPDATE_USER_ITEM_ASYNC],
		() => updateItem(inputData),
		{
			retry: false,
			onSuccess: () => {
				alert("The item info was successfully updated!");
				window.location.reload();
			},
			onError: (error: AxiosError<AxiosErrorData>) => {
				alert(
					`Failed to update item info\n${error.message}\n${error.response?.data.message}`
				);
				navigate("/items");
			},
		}
	);
};

export default useUpdateItem;
