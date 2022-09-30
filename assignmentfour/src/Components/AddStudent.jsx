import { Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'

export const AddStudent = () => {
    const [fname, setName] = useState('');
    const [age, setAge] = useState('');
    const [course, setCourse] = useState('');
    const [batch, setBatch] = useState('');
    const [list, setList] = useState('');
    const data = {fname,age,course,batch};

    const handleSubmit = (e) =>{
        if(fname && age && course && batch)
        setList((lis)=>[...lis,data]);
        
        console.log(list);
    }

    return (
        <div className='main-nav'>
            <div className='menu-link'>
                <ul>
                    <li><Link to='/' style={{ textDecoration: 'none' }} className="menuColor">Home</Link></li>
                    <li><Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor">Students</Link></li>
                    <li><Link to='/Contact' style={{ textDecoration: 'none' }} className="menuColor">Contact Us</Link></li>
                </ul>
            </div>
            <div className='contentDiv'>
                <div className='inputField'>
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" name="name" value={fname} onChange={((e)=>setName(e.target.value))} />
                </fieldset>
                <fieldset>
                    <legend>Age</legend>
                    <input type="text" name="age" value={age} onChange={((e)=>setAge(e.target.value))}/>
                </fieldset>
                <fieldset>
                    <legend>Course</legend>
                    <input type="text" name="course" value={course}  onChange={((e)=>setCourse(e.target.value))}/>
                </fieldset>
                <fieldset>
                    <legend>Batch</legend>
                    <input type="text" name="batch" value={batch}  onChange={((e)=>setBatch(e.target.value))}/>
                </fieldset>
                </div>
                <div className='bttnClass'>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                <button onClick={handleSubmit} className='upbtn'>Add</button>
                </div>
            </div>
        </div>
    )
}  

