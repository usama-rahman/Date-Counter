import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <div className="main">
      <div className="btn">
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <p>Step : {step} </p>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
      </div>

      <div className="btn">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <p>Count : {count} </p>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
    </div>
  );
}

export default App;
