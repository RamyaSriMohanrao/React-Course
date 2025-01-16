import React from 'react';

class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
              userInfo:{
               login: "Sri",
                id: "default",
              }
        }
    // console.log(this.props.name + "child Constructor")
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/RamyaSriMohanrao");
        const json = await data.json();


        this.setState({
            userInfo: json,
        });
        // console.log(json)
        // console.log(this.props.name + "child didMount")
    }

    render(){
        // console.log(this.props.name + "child Renderd")

        const {login, id} = this.state.userInfo
       

        return (
            <div className="user-card">
                <h2>Name: {login}</h2>
                <h3>Location: {id}</h3>
                <h4>Contact: ramyasri_mohanram</h4>
            </div>
    
        );
    }
}

export default UserClass;