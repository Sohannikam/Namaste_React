import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default location",
                avatar_url:"http://dummy-photo.com",
            }
        }
    }

   async componentDidMount()
    {
        const data= await fetch("https://api.github.com/users/sohannikam")
         const json=await data.json();

this.setState({
    userInfo:json,
});

console.log(json)
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }
    render()
    {
        const {name,location,avatar_url}=this.state.userInfo;

         return <div className="user-card">
        <img src={avatar_url} alt="" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact : nikamsohan35@gmail.com</h4>
    </div>

    }
}

export default UserClass;



/*

-------- MOUNTING ---------

Constructor (dummy)
Render (dummy)
            <HTML Dummy>
Coponent Did Mount
        <API call>
        <this.setState> -- state variable is updated

------- UPDATE

render( Api data)
        Html is loaded with new api data - <HTML (new api data)
        componentDidUpdate
*/