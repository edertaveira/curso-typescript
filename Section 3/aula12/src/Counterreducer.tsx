import { useReducer } from "react";

type State = {
  count: number;
};

type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
}

export function CounterReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Valor: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Decrementar
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Resetar</button>
    </div>
  );
}
