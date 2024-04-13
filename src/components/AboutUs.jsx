// import UserInfo from "../utils/userInfo";
import UserClass from "../utils/userClass";
import {Component} from "react";

class About extends Component{
    constructor(props){
        super(props);
        console.log('Parents const');
    }

    componentDidMount(){
        console.log('Parent component');
    }
    render(){
        console.log('Parents render');
        return(
            <div>
                <h1>We are online food-delivery app</h1>
                <p>Some Details About Us</p>
                {/* <UserInfo name={"Ajay Singh Rawat"}/> */}                
                <UserClass name={"Ajay S Rawat"} City={"Delhi"}/>                       
            </div>
        )
    }
}

export default About;