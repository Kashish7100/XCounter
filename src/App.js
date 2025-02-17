import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{marginTop: "50px", marginLeft: "10px" }}>
      <h1>Counter App</h1>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}
