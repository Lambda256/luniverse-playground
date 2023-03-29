import React from "react";
import AsyncBoundary from "../components/AsyncBoundary/AsyncBoundary";
import AuthTokenForm from "../components/AuthTokenForm";
import Error from "../components/Error";
import Loading from "../components/Loading";

const AuthToken = () => {
	return (
		<>
			<AsyncBoundary
				ErrorFallback={(arg) => <Error error={arg.error} />}
				SuspenseFallback={<Loading />}
			>
				<AuthTokenForm />
			</AsyncBoundary>
		</>
	);
};

export default AuthToken;
