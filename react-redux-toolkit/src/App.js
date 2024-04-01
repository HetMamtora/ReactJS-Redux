import React, {useState} from 'react'

const App = () => {

  const [count,setCount] = useState(0);

  function incr(){
    setCount(count+1);
  }
  function decr(){
    setCount(count-1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incr}>+</button>
      <br />
      <button onClick={decr}>-</button>

      <br /><br />
      <h1>Below eg is using Redux Toolkit</h1>
    </div>
  )
}

export default App