import axios from 'axios';
import { BASE_URL } from './api';

export const contactMessage = (contactData) => async dispatch => {
    const res = await axios.post(`${BASE_URL}/contact_us`, contactData);
    console.log(res)
};

