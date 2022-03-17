import React, { useState } from 'react'
import './join.css'
import {useNavigate} from 'react-router-dom'


let userName;
const Join=  function Join() {
    const [user, setuser] = useState("");
    const navigate = useNavigate();
  return (
    <div className='joinBody'>
        <div className='joinRoomTitle'>Welcome to Chat </div>
        <div className='joinInpts'>

            <input type="text" id="joinRoomInpt" placeholder='Enter Your Name' 
              value={user} onChange={(e)=>setuser(e.target.value)}
            />
            <button id="joinBtn" onClick={()=>{
                userName=user
                if(user){navigate('/chat')}
                
                }}>Join chat</button>
            
            
        </div>
        </div>
  )
}
export {userName} 
export default Join; 