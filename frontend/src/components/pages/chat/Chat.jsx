import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ScrollToBottom from 'react-scroll-to-bottom';
import { saveChat } from '../../../redux/actions/chatActions';

const Chat = ({socket, userName, room}) => {
  let chat = []
    const [currentMessage, setCurrentMessage] = useState("");
    const chats = useSelector((state)=> state.chatReducer)
    const [messageList, setMessageList] = useState(chat);

useEffect(() => {
chats.length !== 0 && setMessageList(chats)
},[chats])

    const dispatch = useDispatch()

    console.log({messageList})
    const sendMessage = async (e)=>{
      if(currentMessage !==""){
        const messageData = {
          room: room,
          author: userName,
          message: currentMessage,
          // time: new Date(Date.now()).getHours() 
          // + ":"+
          // new Date(Date.now()).getMinutes() 
        };
        console.log({messageData})
        
        await socket.emit("send_message", messageData);
        try {
              dispatch(saveChat(messageData))
             } catch (error) {
              return
             }
            setMessageList((prevMessage)=>[...prevMessage, messageData])
            setCurrentMessage("")
            
        };
    }
    
    useEffect(()=> {
        socket.on("receive_message", (data)=>{
            setMessageList((prevMessage)=>[...prevMessage, data])
        })
    },[socket])

  return (
    <div className='chat-window'>
      <div className='chat-header'>
       <p>Live chat</p>
      </div>
      <div className='chat-body'>
      <ScrollToBottom className='message-container'>
        {messageList?.map((messageContent, index)=> {

          return (
            
            <div className='message' id={userName === messageContent.author ? "you" : "other"} key={index}>
              <div>
                <div className='message-content'>
                 <p>{messageContent.message}</p>
                </div>
                <div className='message-meta'>
                  <p id='time'>{messageContent.time}</p>
                  <p id='author'>{messageContent.author}</p>
                </div>
              </div>
            </div>)
         })}
         </ScrollToBottom>
      </div>
      <div className='chat-footer'>
       <input 
           type='text' 
           value={currentMessage}
           placeholder='Hey' 
           onChange={(e)=>setCurrentMessage(e.target.value)}
           onKeyPress={(e)=>{e.key === "Enter" && sendMessage()}}/>
       <button onClick={e =>sendMessage(e)}>&#9658;</button>
      </div>
    </div>
  )
}

export default Chat
