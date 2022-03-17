import React from 'react'
import './message.css'
import {myId} from './Chat'
export default function Message({item}) {

  console.log(item.myId===myId);
  return (
    <div className='messageBody' style={{justifyContent:(item.myId===myId)?'flex-end':'flex-start'}}>
       {(item.myId!==myId) && <div className="messageAvtar">{item.userName}</div>}
        <div className={`message ${(item.myId==myId)?"leftMessage":""}` }>{item.msg}</div>
    </div>
  )
}
