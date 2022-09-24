import React, { useState } from 'react'
export const Functionalcomponent = () =>{

    const [showResults, setShowResults] = React.useState(false)
  const hideShow = () => setShowResults(!showResults)
        return (
            <div className='funContent'>
                <div className='funDiv' onClick={hideShow}>
                    <p>To see styling functional component</p>
                </div>
                {showResults && (<div className='contDiv'>
                    <p className='head'>This is created using functional Component</p>
                    <p className='secPara'>This is done using External CSS </p>
                    <p style={{color:"blue",fontSize:'25px'}}>This is done using inline CSS </p>
                </div>)}
            </div>  
        )
}