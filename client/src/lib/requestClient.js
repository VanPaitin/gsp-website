import axios from 'axios';

const api = `/api`;

const handleResponse = ({ data }) => data;

export const get = (url, params = {}) => axios.get(`${api}${url}`, { params }).then(handleResponse);
