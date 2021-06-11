import React, { useEffect, useState } from "react";
import data_users from "../../data/users.json";
import User from "../User/User";
import UserDropdown from "../Dropdown/Dropdown";
import data_interests from "../../data/interests.json"
import "./styles.scss";

const UsersList = () => {
    const [usersData, setUserData] = useState([]);
    const [interestsData, setInterestsData] = useState([]);
    useEffect(() => {
        const sortedList = data_users.sort((a, b) => (a.following.length < b.following.length) ? 1 : -1);
        setUserData(sortedList);
        setInterestsData(data_interests);
    }, [usersData]);

    const deleteHandler = (id) => {
        var updatedData = []
        const index = usersData.indexOf(usersData.find(item => item.id == id));
        if (index > -1) {
            updatedData = usersData.splice(index, 1);
        }
        setUserData(updatedData);
    }
    return (
        <div className="usersList-wrapper">
            {usersData.map(user => {
                const interest = interestsData && interestsData.find(element => element.id === user.id);
                return interest ? <div key={user.id} className="usersList-wrapper__content">
                    <User info={user} deleteHandler={deleteHandler} />
                    <UserDropdown interest={interest} />
                </div> : <div key={user.id} className="usersList-wrapper__content"> <User info={user} deleteHandler={deleteHandler} /> </div>

            })}
        </div>
    )
}
export default UsersList;