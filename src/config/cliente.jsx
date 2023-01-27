import axios from 'axios';

const cliente = axios.create({
    baseURL: 'https://agos-digital-backend.onrender.com/api'
});

export default cliente;