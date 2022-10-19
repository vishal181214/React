import {Link} from 'react-router-dom'
import React from 'react'
import Navbar from './Navbar'
export const Home =()=>{
        return(
            <div className='main-nav'>
                <Navbar/>
            <div className='contentDiv'>
                <h2>Home Page</h2>
            </div>
            </div>
        ) 
}

// export default Home;