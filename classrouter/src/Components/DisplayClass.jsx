import React, {Component} from 'react'
import {Link} from 'react-router-dom'
 const DisplayClass = () =>{
    return(
        <div>
                <div className='showData'>
                        
                            <div className='itemDiv'>
                                <span>Data Should be</span>
                            </div>
                            <Link to='/'><button className='bckButton'>Back</button></Link>
                            
                </div>
        </div>
    )
}

export default DisplayClass