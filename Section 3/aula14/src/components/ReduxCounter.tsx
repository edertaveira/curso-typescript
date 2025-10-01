import { useDispatch, useSelector } from "react-redux";
import { type RootState, increment, decrement, reset } from "../store";

export function ReduxCounter() {
    const dispatch = useDispatch();
    const value = useSelector((state: RootState) => state.counter.value);


    return (<div>

        <h2>Redux Counter</h2>
        <p>Valor: {value}</p>
        <button onClick={() => dispatch(increment())}>Incrementar</button>
        <button onClick={() => dispatch(decrement())}>Decrementar</button>
        <button onClick={() => dispatch(reset())}>Resetar</button>

    </div>)
}
