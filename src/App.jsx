import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const userdata={
    name:"suresh",
    age:"23",
    location:"chennai"
  }
  const userdata2={
    name:"prakesh",
    age:"23",
    location:"coimabatore"
  }
  const userdata3={
    name:"user1",
    age:"23",
    location:"cuddalore"
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
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, itaque!</p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium repellendus tempora temporibus sed omnis possimus labore nisi! Consequatur nostrum, commodi nobis nulla ut animi facilis at laboriosam, alias dolore soluta molestiae id? Hic necessitatibus debitis, beatae quos iure id?</p>
    </>
  )
}

export default App
