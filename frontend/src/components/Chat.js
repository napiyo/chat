import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './chat.css'
import {io} from 'socket.io-client'
import sendLogo from '../assests/direct.png'
import {userName} from './Join'
import Message from './Message'

let socket;
let myId;


export default function Chat() {
  const navigate = useNavigate();
  const [allMessages, setallMessages] = useState([])
  
  useEffect(() => {

    if(!userName){
      navigate('/')
    
    }

    socket = io('/');
    socket.on("connect",()=>{
      myId=socket.id;

      
    })
   

  
    
    return ()=>{
      socket.on("disconnect")
      socket.off()
    }
 },[])

 useEffect(() => {
  socket.on("recieveMsg",(data)=>{
    // console.log(data.msg);
    setallMessages([...allMessages,data])
   
  })
  return ()=>{
    socket.off()
  }
 }, [allMessages])

 const [msg, setmsg] = useState("");
 const sendmsg=()=>{
   socket.emit("sendMessage",{msg,userName,myId});
   setmsg("")
  //  scrollToBottom()
 }
 
 return (
    <div className="chatBody">
      <div className="chatHeader">Chat</div>
      <div className="inbox">
        {
          (allMessages.length===0)?"Say hi..no older messages were found":allMessages
          .map((item,index)=>{
            console.log(index);
         return <Message item={item} id={index}/>})
        }
    
      </div>
      <div className="chatInpts">
        <input type="text" className='messageInpt' value={msg} onChange={(e)=>setmsg(e.target.value)}/>
        <button id="sendBtn" >

          <img src={sendLogo} alt="send"  className='sendLogoImg' onClick={sendmsg}/>
 
        </button>
      </div>
    </div>
  )
}
export {myId}