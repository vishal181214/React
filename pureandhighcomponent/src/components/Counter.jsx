import React,{useState} from 'react'

export default function Counter(){
    const [count,setCount] = useState(0);
    return(
      <div>
        <h3>{count}</h3>
        <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Update</button>
      </div>
    )
  }