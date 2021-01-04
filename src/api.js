import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Origin': 'http://192.168.0.100:3000'
    }
});