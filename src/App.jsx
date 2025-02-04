import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  function incrementCount() {
    setCount(function (prevCount) {
      return prevCount + 1;
    });
  }

  function decreaseCount(){
    setCount(function(prevCount){
      return prevCount-1;
    });
  }
  function resetCount() {
    setCount(0);
  }

  function checkOddEven(){
    if (count%2===0)
      return "even";
    else
      return "odd";
  }





  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={incrementCount}>
          increasing count 
        </button><br></br>
        <button onClick={decreaseCount}>
          decreasing count 
        </button><br></br>
        <button onClick={resetCount}>
          reset 
        </button>
        <h1>
          {count}
        </h1>
        <h1>
          {checkOddEven()}
        </h1>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
