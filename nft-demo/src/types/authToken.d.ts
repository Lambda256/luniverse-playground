export {};

declare global {
	interface APIKeys {
		accessKey: string;
		secretKey: string;
		expiresIn: number;
	}

	/* Type of AuthToken */
	interface AuthToken {
		token: string;
		expiryAt: string;
	}

	/* Type of generating AuthToken response */
	interface AuthTokenResponse {
		code: string;
		data?: {
			authToken: AuthToken;
		};
		message?: string;
	}
}
