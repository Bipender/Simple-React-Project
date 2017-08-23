import React from 'react';
import UserDetail from './userDetail.jsx'

let USERS = [
                       {id:'800445',name:"Bipender", address:"Delhi", dob:"2017-08-11", project:"xyz", role:"Programmer Analyst" },
                       {id:'800455',name:"Ashutosh", address:"Gorakhpur", dob:"2017-08-10", project:"xyz", role:"Programmer Analyst"},
                       {id:'800465',name:"Avinash", address:"Patna", dob:"2017-08-10", project:"xyz", role:"Programmer Analyst"},
                       {id:'800475',name:"Mohit", address:"Champawat", dob:"2017-08-09",  project:"xyz", role:"Programmer Analyst"}
                       ];

class App extends React.Component {
   render() {
      return (
        
        <div>

         <UserDetail users={USERS} />
         
        </div>
      );

   }
}

export default App;