import React from "react";
import axios from "axios";
import RoomList from "./roomList";
import "./App.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function App() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.yungooso.com/api/messages")
      .then(({ data }) => setDatas(data))
      .then((response) => console.log(response));
  }, []);

  const rooms = datas.reduce((acc, current) => {
    const madeRoom = acc.find((room) => room.roomname === current.roomname);
    if (!madeRoom) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <>
      <Link to="/about">
        <button>about</button>
      </Link>
      <RoomList datas={datas} rooms={rooms}></RoomList>
    </>
  );
}

export default App;
