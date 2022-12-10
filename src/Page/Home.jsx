import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

import "../Css/home.css";
import UserCard from "../Components/UserCard";
import PopUpDetail from "../Components/PopUpDetail";

const Home = (dataUser) => {
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState("")
  const [reposList, setReposList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setUserList(dataUser.dataUser);
  });

  const handlePopUp = (list) => {
    axios.get(list.repos_url).then((result) => {
      setReposList(result.data)
    });
    setUser(list)
    setIsOpen(true)
  }

  const handleClose = (getValue) => {
    setIsOpen(getValue)
  }

  return (
    <div className="home">
      {userList.map((list) => {
        return (
          <div onClick={() => handlePopUp(list)} key={list.id}>
            <UserCard data={list} />
          </div>
        );
      })}
      {isOpen ? <PopUpDetail data={reposList} user={user} close={(value) => handleClose(value)} /> : null }
    </div>
  );
};

export default Home;
