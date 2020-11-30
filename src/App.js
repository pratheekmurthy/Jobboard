import React from 'react'
import Apply from './Apply'
import Admin from './Admin'
import 'bootstrap/dist/css/bootstrap.css'


const App=(props)=>{
    return (<div><h1>Job Board</h1>
        <Apply />
        <Admin />
        
    </div>)
}

export default App