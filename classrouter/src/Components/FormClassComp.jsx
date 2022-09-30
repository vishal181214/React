import React,{Component} from 'react'
import {Link} from 'react-router-dom'
 const FormClassComp = () =>{
    
    return(
        
       <div>
                <div style={{paddingTop:"50px"}}>
                    <form>
                        <label>Name : <input type="text" /></label><br/><br/>
                        <label className="inpield">Department : <input type="text"/></label><br/><br/>
                        <label>Rating : <input type="text" /></label><br/><br/>
                        <Link to='/DisplayClass'><button>Submit</button></Link>
                    </form>
                </div>
        
       </div>
            )
    }
        
    


 export default FormClassComp;