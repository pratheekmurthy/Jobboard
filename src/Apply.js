import React,{useState} from 'react'
import Form from './form'
import axios from 'axios'
import Admin from './Admin'

const Apply =(props)=>{


const formSubmit=(data)=>{
    axios.post("http://dct-application-form.herokuapp.com/users/application-form",data)
        .then((response)=>{
            const result = response.data;
            //console.log(result); 
        })
        .catch((err)=>{
            console.log(err.message);
        })
    }

    return (
        <div>
            <Form formSubmit={formSubmit} />
        </div>
    ) 
}

export default Apply


