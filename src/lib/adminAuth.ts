import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

const COOKIE_NAME = "admin_session";

function getSecret() {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) {
    throw new Error(
      "ADMIN_PASSWORD n'est pas configuré dans les variables d'environnement."
    );
  }
  return password;
}

function computeToken(): string {
  return createHmac("sha256", getSecret()).update("admin-session").digest("hex");
}

export function checkPassword(candidate: string): boolean {
  const expected = getSecret();
  const a = Buffer.from(candidate);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export function getSessionToken(): string {
  return computeToken();
}

export async function isAdminAuthenticated(): Promise<boolean> {
  try {
    const store = await cookies();
    const cookie = store.get(COOKIE_NAME)?.value;
    if (!cookie) return false;
    const expected = computeToken();
    const a = Buffer.from(cookie);
    const b = Buffer.from(expected);
    if (a.length !== b.length) return false;
    return timingSafeEqual(a, b);
  } catch {
    return false;
  }
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME;
