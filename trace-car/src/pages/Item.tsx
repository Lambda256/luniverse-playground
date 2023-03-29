import React from "react";
import AsyncBoundary from "../components/AsyncBoundary/AsyncBoundary";
import Error from "../components/Error";
import History from "../components/History";
import ItemInfo from "../components/ItemInfo";
import Loading from "../components/Loading";

const Item = () => {
	return (
		<>
			<AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
				<ItemInfo />
				<History />
			</AsyncBoundary>
		</>
	);
};

export default Item;
