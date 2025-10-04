import type { User } from "../types/User";

export async function fetchUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return (await res.json()) as User[];
}
