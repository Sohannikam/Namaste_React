import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{

    constructor(props){
        super(props);
        console.log("parent constructor called")
    }

    componentDidMount(){
        console.log("parent did mount")
    }
    render(){
        console.log("parent render called")
          return(
        <div>
            <h1>About class Component </h1>
            <h2>this is namaste react webserie</h2>
        <UserClass name={"sohan nikam classbased"} location={"dehradun"}/>

        </div>
    )
    }
}


export default About;

// the name above in User component is a argument passed to User component


// parent constructor
// parent render 

//    Sohan constructor
//    sohan render

//    elon constructor
//    elon render

//    DOM UPDATED - IN A SINGLE BATCH 
// Sohan ComponentDidMount
// elon ComponentDidMount

// parent ComponentDidMount