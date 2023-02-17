import React, { useState } from 'react'
import './Chat.css'
import { BsPersonCircle } from 'react-icons/bs';
import { HiOutlineSearch } from 'react-icons/hi';
import { FiMoreVertical } from 'react-icons/fi';
import { MdOutlineEmojiEmotions } from 'react-icons/md';
import { MdAttachFile } from 'react-icons/md';
import { HiMicrophone } from 'react-icons/hi';

function Chat() {
    const [input,setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        // console.log("Msg Is >>",input);
        setInput("");
    }

  return (
    <div className='chat'>
        <div className='chat_header'>
            <BsPersonCircle size= {35}/>
            <div className='chat_headerInfo'>
                <h3>Name</h3>
                <p>Last Seen At...</p>
            </div>
            <div className='chat_headerRight'>
                <HiOutlineSearch/>
                <FiMoreVertical/>
            </div>
        </div>
        <div className='chat_body'>
            <p className= {`chat_message ${true &&"chat_reciever"}`}>
            <span className="chat_name">sanju</span>
            hello! how r u? buddy
            <span className='chat_time'>3:20pm</span>
            </p>
        </div>
        <div className='chat_footer'>
            <MdOutlineEmojiEmotions size={25}/>
            <MdAttachFile size={25}/>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type a message' type="text"/>
                <button onClick={sendMessage} type='submit'>Send a message</button>
            </form>
            <HiMicrophone size={25}/>
        </div>

    </div>
  );
}

export default Chat;