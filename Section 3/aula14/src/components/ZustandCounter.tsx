import { useCounter } from "../hooks/useCounter";

export function ZustandCounter() {
  const { value, inc, dec, reset } = useCounter();

  return (
    <div>
      <h2>Zustand Counter</h2>
      <p>Valor: {value}</p>
      <button onClick={inc}>Incrementar</button>
      <button onClick={dec}>Decrementar</button>
      <button onClick={reset}>Resetar</button>
    </div>
  );
}
