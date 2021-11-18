import axios from 'axios';

// const baseUrl = 'http://127.0.0.1:8080/api';
// const baseUrl = 'http://192.168.219.101:8080/api';
const authUrl = process.env.REACT_APP_AUTH_SERVER_URL;


export default function serverApi() {
    return axios.create({
        'baseURL': authUrl,

        'timeout': 1000*60*5,
        
        'headers': {
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*'
        }
    });
}





