import React from "react";
import AsyncBoundary from "../components/AsyncBoundary/AsyncBoundary";
import Error from "../components/Error";
import Loading from "../components/Loading";
import UpdateForm from "../components/UpdateForm";

const Update = () => {
	return (
		<>
			<AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
				<UpdateForm />
			</AsyncBoundary>
		</>
	);
};

export default Update;
