import React from "react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Logo from "../Images/g-logo.png";
import "../Css/navbar.css";

const Navbar = ({dataUser}) => {
  const [search, setSearch] = useState("");
  const base_url = useSelector((state) => state.base_url)

  const handleChange = (event) => {
    setSearch(event.target.value);
  }

  const handlePass = (items) => {
    dataUser(items)
  }

  const handleSearch = () => {
    axios.get(`${base_url}/search/users?q=${search}&page=1&per_page=5`).then((result) => {
      handlePass(result.data.items)
    })
  }

  return (
    <div className="navbar">
        <div className="logo-section">
            <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="searchbar-section">
            <input className="searchbar" type="text" name="search" placeholder="search user" onChange={handleChange} />
            <i className="bi bi-search" onClick={() => handleSearch()} ></i>
        </div>
    </div>
  )
}

export default Navbar