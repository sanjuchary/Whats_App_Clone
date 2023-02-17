import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { CgProfile } from "react-icons/cg";
import { MdDonutLarge } from "react-icons/md";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { FiMoreVertical } from "react-icons/fi";
import { MdGroups } from "react-icons/md";
import { HiOutlineSearch } from "react-icons/hi";
import Sidebarchat from "./Sidebarchat";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  return (
    <div className="sidebar">
      <div className="sidebarheader">
        <CgProfile size={35} />
        <div className="sidebarheader_right">
          <MdGroups />
          <MdDonutLarge />
          <BsFillChatLeftTextFill />
          <FiMoreVertical />
        </div>
      </div>
      <div className="sidebarsearch">
        <div className="sidebarsearchcontainer">
          <HiOutlineSearch />
          <input placeholder="Search or Start New Chat" type="text" />
        </div>
      </div>
      {/* This lead to an error */}
      {/* <div className="sidebar__chats">
        <Sidebarchat />
        {rooms.map((room) => (
          <Sidebarchat key={room.id} id={room.id} name={room.data.name} />
        ))}
      </div> */}
    </div>
  );
}

export default Sidebar;
