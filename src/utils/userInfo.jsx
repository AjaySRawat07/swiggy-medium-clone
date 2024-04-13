// * function-based component

import { useState } from "react";

const UserInfo = ({name}) =>{
    const [count,setCount]  = useState(0);
    const [count2] = useState(1);
    return(
       <div className="user-card border-2 border-black m-2 min-h-32 ">
        <h1 className="h-3,m-2 text-3xl font-bold">Count:{count}</h1>
        <h1 className="h-3,m-2 text-3xl font-bold">Count:{count2}</h1>
        <h2 className="h-3 m-3 text-2xl font-medium">Name:{name}</h2>
       <h4 className="h-2 m-5 text-xl">City:Dehradun</h4>
       <p className="h-1 m-6 text-lg ">Contact: ajju@24Mail</p>
       </div>
    );
}

export default UserInfo;