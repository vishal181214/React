import React,{createContext, useState} from "react";
export const add = createContext();

const Info = (props) =>{
    const[students,setStudents] = useState([
        
        {
            "name":"Happy",
            "age":"25",
            "course":"MERN",
            "batch":"August",
            "id":"1"    
        },
            
        {
            "name":"Joy",
            "age":"27",
            "course":"MERN",
            "batch":"September",
            "id":"2"            
        },
        
        {    
            "name":"Tom",
            "age":"27",
            "course":"MERN",
            "batch":"December",
            "id":"3"        
        },
            
        {    
            "name":"Cris",
            "age":"23",
            "course":"MERN",
            "batch":"Januauary",
            "id":"4"            
        },
    ]);
    return(<div>
        <add.Provider value={[students,setStudents]}>
            {props.children}
        </add.Provider>
    </div>)
}

export default Info;