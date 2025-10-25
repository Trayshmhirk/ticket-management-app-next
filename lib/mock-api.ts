import { sleep, generateId } from "./utils";
import { hashString } from "./hash";

type User = {
  id: string;
  name: string;
  email: string;
  passwordHash: string;
  createdAt: number;
};

export type Session = {
  token: string;
  user: { id: string; name?: string; email: string };
  expiresAt: number;
};

const USERS_KEY = "traydeck_users";
const SESSION_KEY = "ticketapp_session";

function getUsers(): User[] {
  try {
    const data = localStorage.getItem(USERS_KEY);
    if (!data) return [];
    return JSON.parse(data) as User[];
  } catch {
    return [];
  }
}

function createUsers(users: User[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

class ApiError extends Error {
  code: string;
  constructor(message: string, code: string) {
    super(message);
    this.code = code;
  }
}

export async function apiSignup({
  name,
  email,
  password,
  sessionDurationMs = 60 * 60 * 24, // default 24 hours
}: {
  name: string;
  email: string;
  password: string;
  sessionDurationMs?: number;
}): Promise<{ session: Session }> {
  await sleep(600 + Math.random() * 400);

  const users = getUsers();
  const exists = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (exists) {
    throw new ApiError("A user with that email already exists.", "USER_EXISTS");
  }

  const passwordHash = await hashString(password);
  const id = generateId();

  const newUser: User = { id, name, email, passwordHash, createdAt: Date.now() };
  users.push(newUser);

  createUsers(users);

  const token = generateId();

  const session: Session = {
    token,
    user: { id, name, email },
    expiresAt: Date.now() + sessionDurationMs,
  };

  // Persist session under required key
  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return { session };
}

export async function apiLogin({
  email,
  password,
  sessionDurationMs = 60 * 60 * 24,
}: {
  email: string;
  password: string;
  sessionDurationMs?: number;
}): Promise<{ session: Session }> {
  await sleep(400 + Math.random() * 400);

  const users = getUsers();
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());

  if (!user) {
    throw new ApiError("Invalid credentials", "INVALID_CREDENTIALS");
  }

  const passwordHash = await hashString(password);

  if (passwordHash !== user.passwordHash) {
    throw new ApiError("Invalid credentials", "INVALID_CREDENTIALS");
  }

  const token = generateId();

  const session: Session = {
    token,
    user: { id: user.id, name: user.name, email: user.email },
    expiresAt: Date.now() + sessionDurationMs,
  };

  localStorage.setItem(SESSION_KEY, JSON.stringify(session));

  return { session };
}

export async function apiLogout(): Promise<void> {
  await sleep(200);

  // remove session and user
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(USERS_KEY);
}
