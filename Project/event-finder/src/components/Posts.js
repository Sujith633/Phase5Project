  import React, { Component } from 'react'
  // import PostDetail from './PostDetails';

  export default class Posts extends Component {
    
    constructor(){
      super();
      this.state = {
          post: {
              event: '',
              desc: '',
            },   
            posts: [{
              event: 'Introduction to react',
              desc: 'This post gives intro to react',
            },]
        };
    }
    HandleSubmit=(e)=>{
    e.preventDefault();
    // this.setState((prevState) => {
    //   const id = prevState.posts.length === 0 ? 1 : prevState.posts[prevState.posts.length - 1].id + 1;
    //   const post = { ...this.state.post, id: id };

    //   return { posts: [post, ...prevState.posts] };

    // });
    }
  handelevent = (e) => {    
    console.log('event:', e.target.value);
  // this.state.post.title = e.target.value;
    const post = this.state.post;
    this.setState({ post: { ...post, event: e.target.value } });
  }
  handeldesc = (e) => {    
    console.log('desc:', e.target.value);
  // this.state.post.title = e.target.value;
    const post = this.state.post;
    this.setState({ post: { ...post, desc: e.target.value } });
  }
  renderform(){
    const myStyle = {
      color: "white",
      backgroundColor: "#e83e8c",
      padding: "10px",
      fontFamily: "Sans-Serif"
    };
    return(
    <div>
    <form className='container' >
  <h1 style={myStyle}>Welcome to the EventFinder App</h1>
    <div className=" mb-3 my-3">
        <label htmlFor="eventname" className="form-label"><h5>Name of the event:</h5></label>
        <input type="textform" className="form-control" name='event' id="event1" aria-describedby="eventHelp" value={this.state.post.event} onChange={this.handelevent}/>
        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
    </div>
    <div className=" mb-8">
        <label htmlFor="exampleInputPassword1" className="form-label"><h5>Description:</h5></label>
        <input type="textform" className="form-control" rows='6'value={this.state.post.desc} id="desc1" onChange={this.handeldesc}/>
    </div>
    <div className=" mb-3 form-check my-3">
        <input type="checkbox" className="  form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    </div>
    <button type="submit"  className="btn btn-primary">Submit</button>
    </form>
  </div>
  );}
  render() {
      return (
      <div>
        <this.renderform/>
      </div>
      );
    }
  }
