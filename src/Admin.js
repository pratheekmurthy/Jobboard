import React,{useEffect,useState} from 'react'
import axios from 'axios'
import AdminContainer from './adminContainer'

const Admin =(props)=>{
    const [profiles,setProfiles] = useState([])
    
    useEffect (() =>{
        axios.get("http://dct-application-form.herokuapp.com/users/application-forms")
            .then((response)=>{
                const result = response.data
                
            setProfiles(result);
            })//success
            .catch((err)=>{
                alert(err.message);
            }) //error
        

    },[profiles])

    return (<div>
        <h2>Admin dashboard</h2>
        <AdminContainer profiles ={profiles}/>

    </div>)
}

export default Admin