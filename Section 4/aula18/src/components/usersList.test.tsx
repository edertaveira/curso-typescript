import { render, screen } from "@testing-library/react";
import { UserList } from "./UsersList";
import { test, expect } from "@jest/globals";
import { mockUsers as mockUsersData } from "../mocks/users";

test("renderiza lista de usuários", () => {
  render(<UserList users={mockUsersData} />);
  expect(screen.getByText("João")).toBeDefined();
  expect(screen.getByText("Maria")).toBeDefined();
});
