import React from 'react'
import {useState} from 'react';
import axios from 'axios'

function TextForm() {

  const [eventname,seteventname] = useState('');
  const [descp,setdescp] = useState('');
  // const [date,setdate] = useState('');
  var today = new Date(),
  date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
 
  

    const myStyle = {
        color: "white",
        backgroundColor: "#e83e8c",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };

      const handleevent = (e) =>{
        seteventname(e.target.value);
        console.log(eventname);
    }
  
    const handledescp = (e) =>{
      setdescp(e.target.value);
        console.log(descp);
    }
  

      const handleSubmit = () =>{
        const data1 = {
            "eventname" : eventname,
            "description": descp,
            "date" : date,
        };
        console.log(data1);
       axios.post("http://localhost:3000/events/",data1).then(
        response => (alert(data1))
       )
    }

      
  return (
    <div>
      <form className='container' onSubmit={handleSubmit}>
      <h1 style={myStyle}>Welcome to the EventFinder App</h1>
        <div className=" mb-3 my-3">
            <label htmlFor="eventname" className="form-label"><h5>Name of the event:</h5></label>
            <input type="textform" className="form-control" id="event1" value={eventname} onChange={handleevent} aria-describedby="eventHelp"/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className=" mb-8">
            <label htmlFor="exampleInputPassword1" className="form-label"><h5>Description:</h5></label>
            <input type="textform" className="form-control" rows='6' id="exampleInputPassword1" value={descp} onChange={handledescp}/>
        </div>
        <div className=" mb-3 form-check my-3">
            <input type="checkbox" className="  form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default TextForm
