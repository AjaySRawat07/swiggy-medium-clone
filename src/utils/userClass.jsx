import React  from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo:{
            name:'dummy',
            location:"default",
            avatar_url: 'http://dummyImg.com',
            Contact : "url",
            }
        }
        console.log('child const')
    }
    async componentDidMount(){
        const response = await fetch('https://api.github.com/users/AjaySRawat07');
        const json = await response.json();
        
        console.log(json); 
        this.setState({
         userInfo : json,
        });
     }
    

    render(){
        const{ name, id,avatar_url,organizations_url} = this.state.userInfo;
        // const {count,count2} = this.state;
        console.log('child Render');
        return(
            <div className="user-card border-2 border-black m-2 min-h-72 ">
            <img src={avatar_url}/>
             <h2 className="h-3 mb-3 text-xl font-medium">DeveloperName: {name}</h2>
            <h4 className="h-2 mb-3 text-lg font-medium">id:{id}</h4>
            <p className="h-1 mb-2 text-lg font-medium">Contact:{organizations_url}</p>
            </div>
         );
    }
}
export default UserClass;
