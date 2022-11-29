import axios from 'axios';

const chat = "http://localhost:5000/chat";

export const saveChat = (chatting) => axios.post(chat, chatting);
export const getRoomChat = (room) => axios.get(`${chat}/${room}`);