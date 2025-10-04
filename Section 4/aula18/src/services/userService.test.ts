import { fetchUsers } from "./userService";
import { jest, test, expect } from "@jest/globals";
import { mockUsers as mockUsersData } from "../mocks/users";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockUsersData),
  } as Response)
) as jest.MockedFunction<typeof fetch>;

test("fetchUsers retorna lista de usuários", async () => {
  const users = await fetchUsers();
  expect(users).toEqual(mockUsersData);
});
