import type { User } from "../types/User";

type Props = {
  users: User[];
};

export function UserList({ users }: Props) {
  return (
    <ul>
      {users.map((u) => (
        <li key={u.id}>{u.name}</li>
      ))}
    </ul>
  );
}
