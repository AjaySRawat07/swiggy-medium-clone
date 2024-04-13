import { useRouteError } from "react-router-dom";


const Error = () =>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1 className="flex justify-center items-center bg-red-300 text-2xl m-10 font-bold">OOPs!</h1>
        <h2 className="text-xl ">Something wrong with this page</h2>
        <span>{err.status}! </span>
        <span>{err.statusText}</span>
        </div>
    )
}

export default Error;