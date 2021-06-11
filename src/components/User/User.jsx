import React from "react"; 
import DeleteIcon from '@material-ui/icons/Delete';
import "./styles.scss";

const User = ({ info, deleteHandler }) => {
  return (
    <div className="user-wrapper">
      <img 
      alt="user-img"
        className="user-wrapper__img"
        src="https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png"
      />
      <div className="user-wrapper__info">
        <span className="user-wrapper__name">{info.name}</span>
        <span className="user-wrapper__followers">
          {info.following.length > 1 ? info.following.length + " followers" : info.following.length + " follower" } 
        </span>
      </div> 
      <DeleteIcon onClick={() => deleteHandler(info.id)}/>
    </div>
  );
};

export default User;
