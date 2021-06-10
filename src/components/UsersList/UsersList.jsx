import React from "react";
import usersData from "../../data/users.json"; 
import User from "../User/User";  
import UserDropdown from "../Dropdown/Dropdown";
import interrestsData from "../../data/interests.json"
import "./styles.scss";
const UsersList = () => {

    return (
        <div className="usersList-wrapper">
            {usersData.map(user => { 
                 return interrestsData.map(interest => {
                      return user.id === interest.id && 
                      <div class="usersList-wrapper__content"> 
                      <User key={user.id} info={user}/>  
                      <UserDropdown key={interest.id} interest={interest}/>
                      </div>
                  })
      
           })}
        </div>
    )
} 
export default UsersList;