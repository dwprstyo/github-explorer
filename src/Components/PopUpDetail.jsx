import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import "../Css/popup-detail.css";
import PopUpDetailRepos from "./PopUpDetailRepos";

const PopUpDetail = (data) => {
  const [reposList, setReposList] = useState([]);

  useEffect(() => {
    setReposList(data.data);
  });

  const handleClose = () => {
    data.close(false)
  }

  return (
    <div className="popup-detail">
      <div className="popup-detail-header">
        <div className="user-detail">
          <img className="avatar-detail" src={data.user.avatar_url} alt="" />
          <span className="username-detail">
            {data.user.login}'s repositories
          </span>
        </div>
        <i className="bi bi-x" onClick={() => handleClose()}></i>
      </div>
      <div className="popup-detail-content">
        {reposList.map((list) => {
          return(
            <PopUpDetailRepos key={list.id} data={list}/>
          )
        })}
      </div>
    </div>
  );
};

export default PopUpDetail;
