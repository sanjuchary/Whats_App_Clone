import React, {  useEffect , useState } from 'react'
import './Sidebar.css'
import { CgProfile } from 'react-icons/cg';
import { MdDonutLarge,  } from 'react-icons/md';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { FiMoreVertical } from 'react-icons/fi';
import { MdGroups } from 'react-icons/md';
import { HiOutlineSearch } from 'react-icons/hi';
import Sidebarchat from './Sidebarchat';
import db from "./firebase";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  
  useEffect(() => {
  //   db.collection("rooms").get().then((snapshot) => 
  //   setRooms(
  //     snapshot.docs.map((doc) => ({
  //       id:doc.id,
  //       data:doc.data(),
  //     }))
  //     )
  //   );
  db.collection("data").get().then((querySnapshot) => {
    querySnapshot.forEach(element => {
        const data = element.data();
        setRooms(arr => [...arr , data]); 
      })
    });
},[]);

  return (
    <div className='sidebar'>
        <div className='sidebarheader'>
            <CgProfile size={35}/>
            <div className='sidebarheader_right'>
                <MdGroups/>
                <MdDonutLarge /> 
                <BsFillChatLeftTextFill/> 
                <FiMoreVertical/>
            </div>
        </div>   
        <div className='sidebarsearch'>
          <div className='sidebarsearchcontainer'>
            <HiOutlineSearch/>
            <input placeholder='Search or Start New Chat' type='text'/>
          </div>
        </div>   
        <div className='sidebar__chats'>
            <Sidebarchat />
            {rooms.map(data =>(
              <Sidebarchat name={data.nane} age={data.age}/>
            ))}
        </div>   
    </div>
  );
}

export default Sidebar;