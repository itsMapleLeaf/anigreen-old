declare namespace CookieSessionInterfaces {
	interface CookieSessionObject {
		user?: {
			/** Expiry time in seconds */
			expires_in: number
			/** Token header used to access the API */
			access_token: string
			/** Timestamp in unix MS at which the token is expired */
			expiresAt: number
		}
	}
}
