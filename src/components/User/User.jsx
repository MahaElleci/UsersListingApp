import React from "react";
import "./styles.scss";

const User = ({ info }) => {
  return (
    <div className="user-wrapper">
      <img
        className="user-wrapper__img"
        src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
      />
      <div className="user-wrapper__info">
        <span className="user-wrapper__name">{info.name}</span>
        <span className="user-wrapper__followers">
          {info.following.length > 1 ? info.following.length + " followers" : info.following.length + " follower" } 
        </span>
      </div>
    </div>
  );
};

export default User;
