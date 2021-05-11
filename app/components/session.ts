import { createCookie } from "remix"

// TODO: use zod to validate this
// if validation fails, consider the session invalid
type SessionData = {
  accessToken: string
  expiresAt: number
}

const oneDayMs = 1000 * 60 * 60 * 24

const sessionCookie = createCookie("session", {
  httpOnly: true,
  secrets: [process.env.COOKIE_SECRET!],
  expires: new Date(Date.now() + oneDayMs * 365),
})

export function serializeSession(data: SessionData): string {
  return sessionCookie.serialize(data)
}

export function parseSession(
  cookieHeader: string | null | undefined
): SessionData | undefined {
  return (cookieHeader && sessionCookie.parse(cookieHeader)) || undefined
}

export function clearSession() {
  return sessionCookie.serialize(null)
}
