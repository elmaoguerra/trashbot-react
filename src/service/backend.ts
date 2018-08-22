// tslint:disable-next-line:one-variable-per-declaration

import {ILoginState} from '../widgets/common';


const API_URL = 'https://trashbot-api.herokuapp.com/api/v1';
const API_AUTH = 'https://trashbot-api.herokuapp.com';

const reqHeaders = {
    "Authorization": localStorage.getItem('token') || '',
    "Content-Type": "application/json; charset=utf-8",
}

export const API = {

    login(usuario:ILoginState) {
        
        return fetch(API_AUTH + '/auth/login', {
            body: JSON.stringify({ email:usuario.email, password: usuario.password }), 
            headers: {"Content-Type": "application/json; charset=utf-8"},
            method: "POST",
        })
        .then(response => {
            if(response.ok) {
                return response.json()
            }else{
                throw new Error('Something bad happened' + response.status)
            }
        })
        .catch((error)=> {
            throw new Error('Something bad happened' + error)
        });
    },
    
    sendMessage(text : string){

        const msj : any = {"mensaje" : {
            "input": {
              "text": text
        }}};

        return fetch(API_URL + '/chats', {
            body: JSON.stringify(msj), 
            headers: reqHeaders,
            method: "POST",
        }).then(response => response.json());
    }
}
