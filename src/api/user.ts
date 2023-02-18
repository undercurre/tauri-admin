/* eslint-disable @typescript-eslint/naming-convention */
import axios from 'axios';
import { baseUrl } from './base';
const moduleUrl = baseUrl + 'user/';

export async function Login(username: string, password: string) {
    const res = await axios({
        method: 'get',
        url: baseUrl + 'login',
        params: {
            username: username,
            password: password,
        },
    });
    
    

    return res;
}