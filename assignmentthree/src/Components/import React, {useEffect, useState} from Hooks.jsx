import React, {useEffect, useState} from 'react'
import {useLocation} from 'react-router-dom'

export const FormData = (props) => {
    const [list,setList] = useState([]);
    let newlist = [...list];
    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);
    
   const name = urlParam.get("name");
   const depart = urlParam.get("derpat");
   const rate = urlParam.get("rate");
   const data = [{"name":name,"depart":depart,"rate":rate}];
   newlist.push({"name":name,"depart":depart,"rate":rate});
//    useEffect(()=>{
//     setList([...list,data]);
//     },[])
    console.log(newlist);
    return(
        <div>
            <div>
                {newlist.map(({item,index}) =>{
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