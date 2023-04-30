import React from 'react'

function TextForm() {
    const myStyle = {
        color: "white",
        backgroundColor: "#e83e8c",
        padding: "10px",
        fontFamily: "Sans-Serif"
      };

      const HandleSubmit=(e)=>{
        e.preventDefault();
      }
  return (
    <div>
      <form className='container'>
      <h1 style={myStyle}>Welcome to the EventFinder App</h1>
        <div className=" mb-3 my-3">
            <label htmlFor="eventname" className="form-label"><h5>Name of the event:</h5></label>
            <input type="textform" className="form-control" id="event1" aria-describedby="eventHelp"/>
            {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
        </div>
        <div className=" mb-8">
            <label htmlFor="exampleInputPassword1" className="form-label"><h5>Description:</h5></label>
            <input type="textform" className="form-control" rows='6' id="exampleInputPassword1"/>
        </div>
        <div className=" mb-3 form-check my-3">
            <input type="checkbox" className="  form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" onSubmit={HandleSubmit} className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default TextForm
