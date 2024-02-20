import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [values, setValues] = useState([]);

  const handleClick = () => {
    setCounter(counter + 1);
    setValues(values.concat(counter));
  }

  console.log(values)

  return (
    <div className="container">
      <h1>Helloooo</h1>
      <button onClick={handleClick}>
        Click
      </button>
      <h2>{counter}</h2>
    </div>
  )
}

export default App;