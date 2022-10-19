import { Link, useParams } from 'react-router-dom'
import React, { useEffect, useState, useContext } from 'react'
import {add} from '../Container/Info'
import Navbar from './Navbar'
export const Edit = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState('');
    const [course,setCourse] = useState('');
    const [batch,setBatch] = useState('');
    const { id } = useParams();
    const [students,setStudents] = useContext(add);

    useEffect(() => {
        students.forEach((item) => {
            if(item.id === id)
            {
                setName(item.name)
                setAge(item.age)
                setCourse(item.course)
                setBatch(item.batch)
            }
        })
    },[id,students]);

    const submitData = () =>{
        setStudents((prev) =>
        prev.map((add) =>
        add.id === id ? {id:id,name:name,age:age,batch:batch,course:course,} : add))
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
                    <input type="text" name="name" value={name} onChange={(e)=>{setName(e.target.value)}} />
                </fieldset>
                <fieldset>
                    <legend>Age</legend>
                    <input type="text" name="age" value={age} onChange={(e)=>{setAge(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <legend>Course</legend>
                    <input type="text" name="course"  value={course} onChange={(e)=>{setCourse(e.target.value)}}/>
                </fieldset>
                <fieldset>
                    <legend>Batch</legend>
                    <input type="text" name="batch"  value={batch} onChange={(e)=>{setBatch(e.target.value)}}/>
                </fieldset>
                </div>
                <div className='bttnClass'>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='canBtn'>Cancel</button></Link>
                <Link to='/Students' style={{ textDecoration: 'none' }} className="menuColor"><button className='upbtn' onClick={submitData}>Update</button></Link>
                </div>
            </div>
        </div>
    )
}  

