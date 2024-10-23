/* @refresh reload */
import { createSignal, createContext, useContext, JSX } from "solid-js";

const CounterContext = createContext();

export function CounterProvider(props: { 
  count: number; 
  children: JSX.Element; 
}) {
  const [count, setCount] = createSignal(props.count || 0);

  const counter = [
      count,
      {
        increment() {
          setCount(c => c + 1);
        },
        decrement() {
          setCount(c => c - 1);
        }
      }
    ];

  return (
    <CounterContext.Provider value={counter}>
      {props.children}
    </CounterContext.Provider>
  );
}

export function useCounter() { return useContext(CounterContext); }
