// src/api/axios.ts
import axios from 'axios'

// Ставим корневой URL вашего бэкэнда
const client = axios.create({ baseURL: 'http://localhost:9876' })

client.interceptors.request.use(cfg => {
    const token = localStorage.getItem('token')
    console.log('[axios] trying with token =', token)
    if (token && cfg.headers) {
        cfg.headers.Authorization = `Bearer ${token}`
    }
    console.log('[axios] headers now =', cfg.headers)
    return cfg
})

export default client
