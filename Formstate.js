import React, { useState } from "react";
import { Container } from "react-bootstrap";


function Formstate(){
    const[name,setName]=useState("");
    const[error,setError]=useState();

    const[mail,setMail]=useState("");
    const[merror,setMerror]=useState("");

    const[pass,setPass]=useState("");
    const[perror,setPerror]=useState("");

    const[cpass,setCpass]=useState("");
    const[cerror,setCerror]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        let c1="false", c2="false", c3="false", c4="false";
        if(name.length==0) {
        setError("Name must be entered");
        document.getElementById("re").style.border="2px solid red";
        }
        else{
            setError('');
            document.getElementById("re").style.border="2px solid green";
            c1="true";
        }
    
        let k = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(mail=="") {
            setMerror("Please enter your email id");
        }
        else if (!k.test(mail)) {
            setMerror("Please enter valid email");
        }
        else{
            setMerror("");
            c2="true";
        }
        let d=/^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(pass=="") {
            setPerror("please enter you password")
        }
        else if (!d.test(pass)) {
            setPerror("The password must contain 6-16 characters")
        }
        else{
            setPerror("");
            c3="true";
        }
        if(cpass=="") {
            setCerror("confirm your password");
        }
        else if (!(cpass).match(pass)){
            setCerror("invald password")
        }
        else{
            setCerror("")
            c4="true";
        }
       if((c1=="true")&&(c2=="true")&&(c3=="true")&&(c4=="true")){
        alert("your form is submitted")
       } 

    }
    return(
        <>
      
<div className="task">
<h1 className=" ms-5 mt-0 fs-2">Registration Form</h1>
<form onSubmit={handleSubmit}>

   <label>Name:</label>
    <input type="text"id="re" placeholder="Enter your name" onChange={(e)=>{setName(e.target.value)}}></input><br></br>
    {error && <label>{error}</label>}<br></br>
  <label>Email ID:</label>
        <input type="text" placeholder="Enter your Email" onChange={(e)=>{setMail(e.target.value)}}></input><br></br>
        {merror && <label>{merror}</label>}<br></br>
        <label>password:</label>
       < input type="password" placeholder="Enter your password" onChange={(e)=>{setPass(e.target.value)}}></input><br></br>
       {perror && <label>{perror}</label>}<br></br>
       <label>Confirm Password:</label>
       <input type="password" placeholder="Confirm Your password" onChange={(e)=>{setCpass(e.target.value)}}></input><br></br>
       {cerror && <label>{cerror}</label>}<br></br>
<Container className="click">
<button className="cli" type="submit">Login</button>
</Container>
</form>
</div>
</>
    )
}
export default Formstate;