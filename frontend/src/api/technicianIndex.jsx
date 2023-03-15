import axios from "axios";


export const technicianUrl = "http://localhost:4000/technician";

export const createTechnician = (technician) => axios.post(`${technicianUrl}/register`, technician);

export const loginTechnician = (technician) => axios.post(`${technicianUrl}/login`, technician);

export const deleteTechnician = (id) => axios.delete(`${technicianUrl}/${id}`);

export const getTechnician = (id) => axios.get(`${technicianUrl}/${id}`);

export const allTechnicians = () => axios.get(technicianUrl);
