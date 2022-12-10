import React, { useEffect, useState } from 'react'

import UserCardMobile from '../Components/UserCardMobile'
import "../Css/home-mobile.css"

const HomeMobile = (dataUser) => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(dataUser.dataUser);
  });

  return (
    <div className="home-mobile">
      {userList.map((list, i) => {
        return(
          <UserCardMobile key={list.id} userList={list} number={i} />
        )
      })}
    </div>
  )
}

export default HomeMobile