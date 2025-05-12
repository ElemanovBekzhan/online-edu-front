import axios from 'axios'

const api = axios.create({baseURL: 'http://localhost:9876/api/auth'})

export const signUp = (data: { password: string; roles: string[]; username: string }) =>
    api.post('/createUser', data)

export const signIn = (data: {username:string;password:string})=>
    api.post('/signin', data)