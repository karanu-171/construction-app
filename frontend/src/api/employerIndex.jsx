import axios from "axios";


export const employerUrl = "http://localhost:4000/employer";

export const createEmployer = (employer) => axios.post(`${employerUrl}/register`, employer);

export const loginEmployer = (employer) => axios.post(`${employerUrl}/login`, employer);

export const deleteEmployer = (id) => axios.delete(`${employerUrl}/${id}`);

export const allEmployers = () => axios.get(employerUrl);
