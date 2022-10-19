import { Link } from 'react-router-dom'
import React,{useState, useContext} from 'react'
import {add} from '../Container/Info'
import Navbar from './Navbar'
export const AddStudent = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [course,setCourse] = useState('');
    const [batch,setBatch] = useState('');
    const [students,setStudents] = useContext(add);

    const submitData = () =>{
        const timestamp = Date.now();
        setStudents([...students,{name:name,age:age,course:course,batch:batch,id:timestamp.toString()}]);
    }
    return (
        <div className='main-nav'>
            <div className='menu-link'>
                <Navbar/>
            </div>
            <div className='contentDiv'>
                <div className='inputField'>
                <fieldset>
                    <legend>Name</legend>
                    <input type="text" id="name" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </fieldset>
                <fieldset>
                    <legend>Age</legend>
                    <input type="text" id="age" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <legend>Course</legend>
                    <input type="text" id="course" name="course" value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <legend>Batch</legend>
                    <input type="text" id="batch" name="batch" value={batch} onChange={(e)=>{setBatch(e.target.value)}}/>
                </fieldset>
                </div>
                <div className='bttnClass'>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn' onClick={submitData}>Add</button></Link>
                </div>
            </div>
        </div>
    )
}  

