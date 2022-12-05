import axios from 'axios';


export const contactUrl = "http://localhost:4000/contact";

export const saveContact = (contact) => axios.post(`${contactUrl}/`, contact);

export const getContact = () => axios.get(contactUrl)