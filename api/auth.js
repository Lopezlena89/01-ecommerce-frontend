import axios from 'axios';


const API = 'http://localhost:8000';

export const registerRequest =async (user) =>await axios.post(`${API}/api/auth/register`,user);
export const loginRequest = async (user) =>await axios.post(`${API}/api/auth/login`,user);



