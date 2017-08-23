import React from 'react';

class UserDetail extends React.Component{
  

constructor(props)
{
    super(props);
    this.state ={
        name:"Bipender Singh",
        users:this.props.users
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
}

handleSubmit(event)
{
    event.preventDefault();
    let obj ={};
    obj.id= this.refs.empId.value;
    obj.name= this.refs.empName.value;
    obj.address= this.refs.empAddress.value;
    obj.dob = this.refs.empDOB.value;
    obj.project = this.refs.empProj.value;
    obj.role = this.refs.empRole.value;

    this.setState(
       {users: this.state.users.concat(obj)}

    );
    this.refs.empId.value = "";
    this.refs.empName.value= "";
    this.refs.empAddress.value = "";
    this.refs.empDOB.value = "";
    
}
handleClick(event)
{
    

}

    render(){
        
        
        return(
           <div> 

           <form className="empForm"onSubmit={this.handleSubmit}>
                <label for="empId">Employee Id</label>
                <input type="text" className="form-control" ref="empId" id="empId"/>

                <label for="empName">Employee Name</label>
                <input type="text" className="form-control" ref="empName" id="empName"/>

                <label for="empAddress">Employee Address</label>
                <input type="text" className="form-control" ref="empAddress" id="empAddress"/>

                <label for="empDOB">Employee DOB</label><br/>
                <input type="date" className="form-control" ref="empDOB" id="empDOB"/>

                <label for="empProj">Employee Project</label><br/>
                <input type="text" className="form-control" ref="empProj" id="empProj"/>

                <label for="empRole">Employee Role</label><br/>
                <input type="text" className="form-control" ref="empRole" id="empRole"/><br/>
                
                <input type="submit" value="Submit" className="btn btn-success"  />

           </form>
           <table className="table" >
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Employee Address</th>
                    <th>Employee DOB</th>
                    <th>Employee Project</th>
                    <th>Employee Role</th>
                </tr>
            </thead>
            <tbody>
                {this.state.users.map((user)=>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.address}</td>
                        <td>{user.dob}</td>
                        <td>{user.project}</td>
                        <td>{user.role}</td>
                    </tr>
            )}

            </tbody>
           </table>
           
        </div>
        );
    }
}
export default UserDetail;