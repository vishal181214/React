import React from 'react'

const StudentData = () =>{
    const[name,setName] = useState('');
    const[age, setAge] = useState('');
    const[course, setCourse] = useState('');
    const [batch, setBatch] = useState('');
    const[list,setList] = useState([]);

    const handleChange = (event) =>{
        setName(event.target.value);
    }

    const handleSubmit =(e) =>{
        // e.preventDefault();
        console.log(name,age,course,batch);
        const data ={name,age,course,batch};
        if(name && age && course && batch)
        {
            setList((ls)=>[...ls,data])
            setName('');
            setAge('');
            setCourse('');
            setBatch('');
        }
    }
}

export default StudentData;