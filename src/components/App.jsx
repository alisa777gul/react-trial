import { useState } from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { HiUser } from "react-icons/hi";
import { RxCountdownTimer } from "react-icons/rx";

function App() {
   const [count, setCount] = useState(0)

  return (
    <>
      <h1 style={{ color: "red" }}>Hello World</h1>
      <button type='button' className='variant' onClick={() => setCount(count + 1)}
      >
     <HiUser/>Click me : <RxCountdownTimer/>{count}
      </button>
</>
  )
}

export default App
