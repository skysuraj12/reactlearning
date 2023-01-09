import { useState, createContext } from 'react'
import logo from './logo.svg';
import './App.css';
import FirstChild from './FirstChild';
import SecondChild from './SecondChild';
import Button from './Button';
import UseContext from './UseContext';

const initialName = createContext()
const finalName = createContext()

function App() {
  const [count, setCount] = useState(0)

  console.log('counted', count)// initial count
  const name1 = 'Suraj'
  const name2 = 'Karki'

  return (
    <>
      <initialName.Provider value={name1}>
        <finalName.Provider value={name2}>
          <div className="App">
            <h1>React Project</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <div className='request'>{count}</div>
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
          <UseContext />
        </finalName.Provider>
      </initialName.Provider>
    </>
  );
}

export default App;
export { initialName, finalName };
