import { useState } from 'react'
import './App.css'
import ProfileCard from './ProfileCard.jsx'

// COUNTER = { id: 1, value: 0 }
// When 1 COUNTER : [ {id:1,value:0} ]

// When 2 COUNTER :[ {id:1,value:0} , {id:2,value:0} ]

// When 3 COUNTER :[ {id:1,value:0} , {id:2,value:0} , {id:3,value:0}]

function App2() {
  const [counters,setCounters] =useState([{id:1,value:0}]);
  const addCounters = ()=> {
    [
      setCounters(
        [...counters , { id: counters.length+1, value: 0 } ]
      ),
    ]
  }
   // Increment specific counter by id
  const incrementCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id
          ? { ...counter, value: counter.value + 1 }
          : counter
      )
    );
  };

  return (
    <div>
      <h1 className='app-container'>Hello</h1>
      <button onClick={addCounters}>add Counter </button>
      <ul>
        {counters.map(counter => (
           <li key={counter.id}>
            Counter {counter.id}: {counter.value}
            <button onClick={() => incrementCounter(counter.id)}> Increment </button>
          </li>
        ))}
      </ul>
      

     
    </div>
  )
}

export default App
