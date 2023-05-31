import { useState } from "react";

export default function App() {
  const [number, setNumber] = useState(0);

  const handleNumberChange = (e) => {
    setNumber(+e.target.value);
  };

  /** Usa adecuadamente JSX condicional para mostrar la palanra Par o Impar, en función de si el valor del input es par o impar  */

  return (
    <div className="App container">
      <h1>Number Parity</h1>
      <input type="number" value={number} onChange={handleNumberChange} />
      <p style={{ backgroundColor: number % 2 === 0 ? "green" : "#11191f" }}>
        Par
      </p>{" "}
      <p style={{ backgroundColor: number % 2 === 0 ? "#11191f" : "red" }}>
        Impar
      </p>
    </div>
  );
}
