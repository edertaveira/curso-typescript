// import { useState } from "react";
import "./App.css";
// import { ThemeConsumer, ThemeProvider } from "./ThemeProvider";
// import { CounterReducer } from "./Counterreducer";
// import { Counter } from "./Counter";

type ListProps<T> = {
  items: T[];
  render: (item: T) => React.ReactNode;
};

export function List<T>({ items, render }: ListProps<T>) {
  return (
    <ul>
      {items.map((item, i) => (
        <li key={i}>{render(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  // const [name] = useState<string>("Eder");
  // const [age, setAge] = useState<number | null>(null);

  // return <div>
  //   <h1>Olá, {name}</h1>
  //   {age && <p>Você tem {age} anos</p>}
  //   {!age && <p>Você não tem idade definida</p>}
  //   <button onClick={() => setAge(age ? age + 1 : 1)}>Incrementar</button>
  // </div>;

  // return <CounterReducer />;

  // return (
  //   <ThemeProvider>
  //     <ThemeConsumer />
  //   </ThemeProvider>
  // );

  return (
    <>
      <List items={["a", "b", "c"]} render={(item) => <div>{item}</div>} />
      <List items={[1, 2, 3]} render={(item) => <div>{item}</div>} />
      <List
        items={[true, false, true]}
        render={(item) => <div>{item ? "Sim" : "Não"}</div>}
      />
      <List
        items={[
          { name: "a", age: 1 },
          { name: "b", age: 2 },
          { name: "c", age: 3 },
        ]}
        render={(item) => (
          <div>
            {item.name} - {item.age}
          </div>
        )}
      />
    </>
  );
}

export default App;
