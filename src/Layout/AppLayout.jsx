import React from "react";
import { useState } from "react";
import Home from "../Page/Home";
import HomeMobile from "../Page/HomeMobile";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "../redux/store";

const AppLayout = () => {
  const [dataUser, setDataUser] = useState([]);

  const handleDataUser = (getItems) => {
    setDataUser(getItems);
  };

  return (
    <Provider store={store}>
      <div>
        <Navbar dataUser={(items) => handleDataUser(items)} />

        {/* for desktop or tablet resolution */}
        <Home dataUser={dataUser} />

        {/* for mobile resolution */}
        <HomeMobile dataUser={dataUser} />
      </div>
    </Provider>
  );
};

export default AppLayout;
