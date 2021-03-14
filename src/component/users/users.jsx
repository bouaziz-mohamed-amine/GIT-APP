import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import SearchUser from './SearchUsers';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { users:[
            /**{
                login:"ALSODANI",
                id:1,
                avatar_url: "https://avatars.githubusercontent.com/u/12827894?s=400&v=4",
                html_url: "https://github.com/octocat",
                repos_url: "https://api.github.com/users/octocat/repos",
            },
            {
                login:"octocat",
                id:2,
                avatar_url: "https://avatars.githubusercontent.com/u/16584158?s=460&u=4ee7b6a611048cb16e7d687ea42e7286bff18627&v=4",
                html_url: "https://github.com/octocat",
                repos_url: "https://api.github.com/users/octocat/repos",
            },
            {
                login:"mojombo",
                id:3,
                avatar_url: "https://avatars.githubusercontent.com/u/68121072?s=460&u=a25517fa0df1468ab0c4bb587a1a040d36cd11eb&v=4",
                html_url: "https://github.com/octocat",
                repos_url: "https://api.github.com/users/octocat/repos",
            } */
        ], }
    }



getUsers = ()=>{
    axios.get('https://api.github.com/users')
         .then(response =>{
             this.setState({
                 users: response.data
                })
         })
}

componentDidMount(){
    this.getUsers();
}

searchUsersFromGit(data){

    
        axios.get('https://api.github.com/users/'+data).then(response =>{
            this.setState({users:response.data});
            
        });
    
    
    
 }


    render() { 

        return ( 
        <div>
        <div className="row my-2">
           <div className="col-md-12">
           <SearchUser getusersearch={this.searchUsersFromGit} />       
           </div> 
        </div>    
        <div className="row">
        {this.state.users.map(user=>(
            <div key={user.id} className="col-md-4" >
             <User  user={user}/>   
            </div>
        ))}       
        </div>
        </div> );
    }
}
 
export default Users;