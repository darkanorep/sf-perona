import React, {useEffect, useState, useRef} from 'react'

function Challenge2() {
    let ref = useRef();
    let [seconds, setSeconds] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [count, setCount] = useState(0);
    let renderCount;

    useEffect(() => {
      let date = new Date(seconds, minutes);
      
      if (count) {
        date.setSeconds(count);
      }

      setSeconds(date.getSeconds());
      setMinutes(date.getMinutes());
      
    },[minutes, seconds, count]);

    function startCount() {
      ref.current = setTimeout(renderCount = () => {
        setCount((count) => count+1);
        return ref.current = setTimeout(renderCount, 1000);
      });

    }

    function stopCount() {
      return clearInterval(ref.current);
        
    }

    function resetCount() {
      stopCount();
      setCount(0);

    }

  return (
    <div>
       <h1>2. Create a Basic Count</h1>
       <span>{minutes}mins </span>
       <span>{seconds}secs</span>
       <div className='button2'>
         <button className='button green' onClick={startCount}>Start</button>
         <button className='button red' onClick={stopCount}>Stop</button>
         <button className='button yellow' onClick={resetCount}>Reset</button>
       </div>
    </div>
  )
}

export default Challenge2