import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import icon4 from './assets/icon4.png'
import ironhackLogo from './assets/ironhack-logo-xs.png'
import toggleMenu from './assets/menu-top-xs.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <div className='firstSection'>
        <div className='navbar'>
          <a href="#" target="_blank">
            <img src={ironhackLogo} className="ironHack" alt="Ironhack logo" />
          </a>
          <a href="#" target="_blank">
            <img src={toggleMenu} className="menuIcon" alt="Toggle logo" />
          </a>
        </div>
        <div className="textContent">
          <div className="helloPart">
            <h1>Say Hello to <br/> React JS</h1>
            <p>You will learn how to use <br />the most popular frontend library. <br />and become a super Ninja developer.</p>
          </div>
          <button className='awesomeBtn'>
            <a href="#" target="_blank">Awesome!</a>
          </button>
        </div>
      </div>
      <div className="secondSection">
        <ul>
          <li>
            <a href="#" className='listComponent' target="_blank">
              <img src={icon1} className="icon1" alt="icon1" />
              <div className="title">Declarative</div>
              <p>React makes it painless to create interactive UIs.</p>
            </a>
          </li>
          <li>
            <a href="#" className='listComponent'target="_blank">
              <img src={icon2} className="icon2" alt="icon2" />
              <div className="title">Components</div>
              <p>Build encapsulated components that manage their state</p>
            </a>
          </li>
          <li>
            <a href="#" className='listComponent'target="_blank">
              <img src={icon3} className="icon3" alt="icon3" />
              <div className="title">Single-Way</div>
              <p>A set of immutable values are passed to the component's.</p>
            </a>
          </li>
          <li>
            <a href="#" className='listComponent'target="_blank">
              <img src={icon4} className="icon4" alt="icon4" />
              <div className="title">JSX</div>
              <p>Statically-typed, designed to run on modern browsers.</p>
            </a>
          </li>
        </ul>
      </div>

    </div>
    /*
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
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
    <div/>
    */
  )
}

export default App
