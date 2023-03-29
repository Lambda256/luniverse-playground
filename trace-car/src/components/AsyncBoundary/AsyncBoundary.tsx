import React, { ReactNode, Suspense, SuspenseProps } from "react";
import {
	ErrorBoundary,
	ErrorBoundaryPropsWithRender,
} from "react-error-boundary";

type ExceptFallbackErrorBoundaryAttributes = Omit<
	ErrorBoundaryPropsWithRender,
	"fallbackRender" | "fallback" | "FallbackComponent"
>;

type AsyncBoundaryProps = ExceptFallbackErrorBoundaryAttributes & {
	children: ReactNode;
	ErrorFallback: ErrorBoundaryPropsWithRender["fallbackRender"];
	SuspenseFallback: SuspenseProps["fallback"];
};

/**
 * Async handling component
 * @param children : children component includes async request
 * @param SuspenseFallback : Loading component (e.g., spinner) 
 * @param ErrorFallback  : Errror component
 */
function AsyncBoundary({
	children,
	ErrorFallback,
	SuspenseFallback,
	...restErrorBoundaryAttributes
}: AsyncBoundaryProps) {
	return (
		<ErrorBoundary
			fallbackRender={ErrorFallback}
			{...restErrorBoundaryAttributes}
		>
			<Suspense fallback={SuspenseFallback}>{children}</Suspense>
		</ErrorBoundary>
	);
}

export default AsyncBoundary;
