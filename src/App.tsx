import {Counter} from "./components/Counter";
import {CounterBy} from "./components/CounterBy";
import {CounterEffect} from "./components/CounterEfffect";
import {CounterHook} from "./components/CounterHook";
import {CounterReducer} from "./components/CounterReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr/>

      <Counter initialValue={15} />

      <CounterBy initialValue={15} />

      <CounterEffect initialValue={10} />

      <CounterEffect initialValue={10} />

      <CounterHook initialValue={10} />

      <CounterReducer />
    </>
  );
}

export default App;
