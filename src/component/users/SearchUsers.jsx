import React, { Component } from 'react';

class SearchUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            search:''
         }
    }

    handleform = (e)=>{
        this.setState({
            search : e.target.value,
        })
    }
    handlesubmit = (e)=>{
        e.preventDefault();
        alert("amine");
       // this.props.getUserSrarch();
       this.getusersearch(this.state.search);
       
    }


    render() { 

         const {search}=this.state
        return ( <div>
            <form onSubmit={()=>this.handlesubmit()} >
                <div className="form-group my-2">
                    <label htmlFor="search"></label>
                    <input onChange={this.handleform} id='search' type="text" className="form-control" placeholder="Search users ...." />
                </div>
                {search}
                <div  style={{textAlign:'center'}} className='my-2' >
                    <button type='submit' className="btn btn-danger col-md-6" >Search</button></div>
            </form>
        </div> );
    }
}
 
export default SearchUser;