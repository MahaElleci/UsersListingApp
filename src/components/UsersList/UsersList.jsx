import React from "react";
import usersData from "../../data/users.json"; 
import User from "../User/User"; 
import interrestsData from "../../data/interests.json"
import "./styles.scss";
const UsersList = () => {

    return (
        <div className="usersList-wrapper">
            {usersData.map(user => { 
                  interrestsData.map(interest => {
                      return user.id === interest.id ?  <User key={user.id} info={user}/> :   <User key={user.id} info={user}/>;
                  })
      
           })}
        </div>
    )
} 
export default UsersList;