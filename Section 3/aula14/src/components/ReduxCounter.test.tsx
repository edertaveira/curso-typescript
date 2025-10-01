import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../store";
import { ReduxCounter } from "./ReduxCounter";

test("reduxCounter increments", () => {
  render(
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );

  expect(screen.getByText("Valor: 0")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Incrementar"));
  expect(screen.getByText("Valor: 1")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Decrementar"));
  expect(screen.getByText("Valor: 0")).toBeInTheDocument();
  fireEvent.click(screen.getByText("Resetar"));
  expect(screen.getByText("Valor: 0")).toBeInTheDocument();
});
