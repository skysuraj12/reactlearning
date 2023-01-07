import { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import Button from './Button';

function App() {
  const [count, setCount] = useState(0)

  console.log('counted', count)// initial count
  return (
    <>
      <div className="App">
        <h1>React Project</h1>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <div>{count}</div>
        <FirstChild
          count={count}
          name='suraj'
          age='32'
          country='Nepal'
        />
        <SecondChild
          work='wells'
          depart='Software developer'
          group='CRMS-3'
        // onclick={(handleclick)}
        />
      </div>
      <Button />
    </>
  );
}

export default App;
