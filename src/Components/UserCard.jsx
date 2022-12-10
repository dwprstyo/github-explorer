import React from "react";

import "../Css/user-card.css";

const UserCard = (data) => {
  return (
    <div>
      <div className="user-card">
        <img
          className="avatar"
          src={data.data.avatar_url}
          alt=""
        />
        <span className="username">{data.data.login}</span>
      </div>
    </div>
  );
};

export default UserCard;
