import  React, { useState , useEffect } from 'react'

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    });

    return(
        <div>
            Time : {date.toLocaleTimeString()} <br/>Date : {date.toLocaleDateString()}
        </div>
    )
}

export default DateTime