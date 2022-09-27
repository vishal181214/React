import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

export const FormData = (props) => {
    const [list,setList] = useState([]);
    let newlist = [];
    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);
    
   const name = urlParam.get("name");
   const depart = urlParam.get("derpat");
   const rate = urlParam.get("rate");
   const data = [{"name":name,"depart":depart,"rate":rate}];
   
   useEffect(()=>{
    newlist = [...list]
    newlist.push(data);
    setList(newlist);
    },[])
    console.log(list);
    console.log(newlist);
    return(
        <div>
            <div>
                {list.map(({item,index}) =>{
                    <div key={index}>
                        <span>Name : {item} | </span>
                        <span>Department : {item} | </span>
                        <span>Rating : {item}</span>
                    </div>
                  })}
            </div>
        </div>
    )
}