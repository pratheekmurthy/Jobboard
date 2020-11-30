import React, { useState } from 'react'
import Job from './Job'

const AdminContainer =(props)=>{
    const {profiles} = props;
    const [job1,setJob]= useState ("Front-End Developer")

    

    const job =["Front-End Developer","Node.js Developer","MEAN Stack Developer","FULL Stack Developer"]
    
    const handlechange =(e) =>{
        const result =e.target.value;
        setJob(result);
    }
    
    return(<div>
        {job.map((ele)=>{
            return (
            <button type="button" class="btn btn-primary" value={ele} onClick={handlechange}>{ele}</button>
            )
        })}
    <Job job1={job1} profiles={profiles}/>
        
    </div>)

}

export default AdminContainer