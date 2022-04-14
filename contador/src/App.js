import React, {useState} from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const increaseCounter = () => {
    setCount(count + 1);
  }

  const decreaseCounter = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <h1>Contador</h1>
      <div className='content'>
        <button onClick={count > 0 ? decreaseCounter : ''}>Diminuir</button>
        <p>Quantidade atual: {count}</p>
        <button onClick={increaseCounter}>Aumentar</button>
      </div>
    </div>
  );
}

export default App;
