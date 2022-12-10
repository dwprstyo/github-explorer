import React from "react";
import { useState } from "react";
import axios from "axios";

import "../Css/user-card-mobile.css";
import ExpandDetailRepos from "./ExpandDetailRepos";

const UserCardMobile = (data) => {
  const [isOpen, setIsOpen] = useState();
  const [reposList, setReposList] = useState([]);

  const getReposList = (url) => {
    axios.get(url).then((result) => {
      setReposList(result.data)
    })
  }

  const handleExpand = () => {
    if (isOpen === data.number) {
      setIsOpen(null);
    } else {
      setIsOpen(data.number);
    }

    getReposList(data.userList.repos_url)
  };

  return (
    <div className="user-card-mobile" onClick={() => handleExpand()}>
      <div className="user-card-mobile-header">
        <div className="avatar-section-mobile">
          <img
            className="avatar-mobile"
            src={data.userList.avatar_url}
            alt=""
          />
        </div>
        <div className="username-section-mobile">
          <span className="username-mobile">{data.userList.login}</span>
        </div>
      </div>
      {isOpen === data.number ? (
        <div className="user-card-mobile-content">
          {reposList.map((list, i) => {
            return(
              <ExpandDetailRepos data={list} key={i} />
            )
          })}
        </div>
      ) : null}
    </div>
  );
};

export default UserCardMobile;
