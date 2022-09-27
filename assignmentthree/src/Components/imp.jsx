import React, {useState} from 'react'
import {useLocation} from 'react-router-dom'
// import {Link} from 'react-router-dom'

export const FormData = (props) => {
    const location = useLocation();
    const urlParam = new URLSearchParams(location.search);
    console.log(urlParam);
    urlParam.get("name");
    urlParam.get("derpat");
    urlParam.get("rate");
    console.log(location, urlParam.get("name"));
   const name = urlParam.get("name");
   const depart = urlParam.get("derpat");
   const rate = urlParam.get("rate");
    return(
        <div>
            <div>
                <span>Name : {name} | </span>
                <span>Department : {depart} | </span>
                <span>Rateing : {rate}</span>
            </div>
        </div>
    )
}