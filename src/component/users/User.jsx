import React, { Component } from 'react';
import {
    Link
  } from "react-router-dom";
class User extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 

           const {login,avatar_url,html_url,repos_url} = this.props.user
            
        return (  <div>
            <div className="card">
                <img className="card-img-top" src={avatar_url} alt=""></img>
                <div className="card-body">
                    <h4 className="card-title">{login}</h4>
                    <a href={html_url} className=" btn btn-success">SHOW GIT</a>
                    <Link to={'/users/'+login} className="btn btn-warning">SHOW more</Link>
                </div>
            </div>
        </div>  );
    }
}
 
export default User;