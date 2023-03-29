import React from "react";
import AsyncBoundary from "../components/AsyncBoundary/AsyncBoundary";
import Error from "../components/Error";
import CreateForm from "../components/CreateForm";
import Loading from "../components/Loading";

const Create = () => {
	return (
		<>
			<AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
				<CreateForm />
			</AsyncBoundary>
		</>
	);
};

export default Create;
