import React,{useState} from 'react'
import axios from 'axios'
import validator from 'validator'


const Form =(props)=>{
    const {formSubmit} = props
    const [name,setName] = useState("")
    const [email,setemail]= useState("")
    const [phone,setPhone]= useState("")
    const [job,setJob] = useState("")
    const [exp,setexp]= useState("")
    const [skills,setSkills]= useState("")
    const [formErrors,setFormErrors] =useState({})
    const errors ={}

    const handleName =(e)=> setName(e.target.value)
    const handleEmail =(e)=>setemail(e.target.value)
    const handlePhone =(e)=>setPhone(e.target.value)
    const handleexp =(e)=>setexp(e.target.value)
    const handleSkill =(e)=>setSkills(e.target.value)
    const handledropdown =(e)=>setJob(e.target.value)
    
    const runValidations = () => {
        //name
        if(name.trim().length === 0) {
            errors.name = 'name cannot be blank'
        }
        //email
        if(email.trim().length === 0) {
            errors.email = 'email cannot be blank'
        } else if(!validator.isEmail(email)) {
            errors.email = 'invalid email format'
        }
        if(phone.length === 0){
            errors.phone ="Phone number cannot be blank"
        }else if(!validator.isMobilePhone(''+ phone, 'en-IN')){
            errors.phone ="invalid phone number"
        }
        if(skills.trim().length === 0){
            errors.skills ="skills cannot be blank"
        }
        if(exp.trim().length === 0){
            errors.exp ="experience to be mentioned"
        }
        if(job.length === 0){
            errors.job = "Please select job"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})
            const formData = {
            name: name,
            email:email,
            phone:phone,
            skills :skills,
            jobTitle :job,
            experience :exp
        }
        formSubmit(formData)
        setName("")
        setPhone("")
        setSkills("")
        setemail("")
        setexp("")
        setJob("")
        } else {
                console.log('form errors', errors)
                setFormErrors(errors)
                }
    }

    
return (<div>
        <h3>Apply for Job</h3>
        <form onSubmit={handleSubmit}>
            <label>Full Name</label> - <input type="text" value={name} onChange={handleName}/> {formErrors.name && <span> { formErrors.name } </span>}<br/>
            <br/><label>Email Address</label> - <input type="text" placeholder="example@gmail.com" value={email} onChange={handleEmail}/> {formErrors.email && <span> { formErrors.email } </span>}<br/>
            <br/><label>Contact Number</label> - <input type="text" placeholder="+91 9972387689" value={phone} onChange={handlePhone}/>{formErrors.phone && <span> { formErrors.phone } </span>}<br/>
            <br/><label>Experience</label> - <input type="text" placeholder="2 years 3 months" value={exp} onChange={handleexp}/>{formErrors.exp && <span> { formErrors.exp } </span>}<br/>
            <br/><label>Applying for Job</label> -
            <select value={job}  onChange={handledropdown}>
            <option value="">----Select-----</option>
            <option value="Front-End Developer">Front-End Developer</option>
            <option value="Node.js Developer">Node js Developer</option>
            <option value="MEAN Stack Developer">MEAN Stack Developer</option>
            <option value="FULL Stack Developer">FULL Stack Developer</option>
            </select>{formErrors.job && <span> { formErrors.job } </span>} <br/>
            <br/><label>Technical Skills</label> - <textarea  value={skills} onChange={handleSkill}/>{formErrors.skills && <span> { formErrors.skills } </span>}<br/>
            <br/><input type="submit" />

        </form>
    </div>)
}

export default Form




