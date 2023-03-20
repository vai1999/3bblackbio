import React from 'react'
import Counter from './Counter.json'
import Count from './Count';
function Detail() {
    return (
        <div className='items-center text-center bg-cover bg-fixed card-img p-10'>
            <div className=' '>
                <h1 className=' text-2xl font-bold text-black backdrop-blur-sm m-7'>ENSURING YOU RECEIVE APPROPRIATE ANSWERS ALL THE TIME</h1>
                <p className=' text-center  text-lg text-black font-semibold '>We were able to obtain the data as a result of our never-ending attempts to diagnose and detect the root. <br />We create little solutions that produce a large amount of output.</p>
            </div>
            <div className='grid justify-center text-center  md:space-x-16   font-bold md:flex m-12'>
               
                    {Counter.counts.map(count => <Count key={count.id} data={count}/>)}
                   
                
                 
               
            </div>
        </div>
    )
}

export default Detail
