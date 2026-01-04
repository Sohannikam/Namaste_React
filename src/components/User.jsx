import { useState } from "react";

const User = ({name})=>{

    const[count,setCount]=useState(0);
        const[count2,setCount2]=useState(1);

        useEffect(()=>{

        },[])

       
    return <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Location : Dehradun</h3>
        <h4>Contact : nikamsohan35@gmail.com</h4>
    </div>
}

export default User;


// the name above in props is a parameter 