import React, {useState}from 'react'

function Challenge1() {
    let [show, toggleShow] = useState(true);

  return (
    <div>
        {show && <h1>1. Make this vanish</h1>}
        <button onClick={() => toggleShow(!show)}>Click me!</button>
    </div>
  )
}

export default Challenge1