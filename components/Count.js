import React, { useEffect, useState } from 'react';


const Count = props => {
  // label of counter
  // number to increment to
  // duration of count in seconds
  const {label, number, duration } = props.data

  // number displayed by component
  const [count, setCount] = useState("0")

  useEffect(() => {
    let start = 0;
    // first three numbers from props
    const end = parseInt(number.substring(0,3))
    // if zero, return
    if (start === end) return;

    // find duration per increment
    let totalMilSecDur = parseInt(duration);
    let incrementTime = (totalMilSecDur / end) * 1000;

    // timer increments start counter 
    // then updates count
    // ends if start reaches end
    let timer = setInterval(() => {
      start += 1;
      setCount(String(start) + number.substring(3))
      if (start === end) clearInterval(timer)       
    }, incrementTime);

    // dependency array
  }, [number, duration]);

  return (
<div  className='box-border hover:scale-105 ease-in duration-400 h-32 p-4 m-3 rounded-full shadow-xl shadow-[0px_22px_70px_4px_rgba(0,0,0,0.56)] shadow-cyan-300/70 hover:bg-blue-800 w-60'>
                    <h1 className='m-2 text-4xl text-white'>{count}+</h1>
                    <p className='text-2xl text-white'>{label}</p>
                </div>
   
  );
}

export default Count;
