// src/hooks/useAuth.ts
import { useNavigate } from 'react-router-dom'
import { signIn, signUp } from '../api/auth'
import { useState } from 'react'

export function useAuth() {
    const navigate = useNavigate()
    const [error, setError] = useState<string|null>(null)

    async function login(username: string, password: string) {
        try {
            const { data } = await signIn({ username, password })
            console.log('[useAuth] login response =', data)
            // Именно data.token (смотри ваш бэкенд-ответ)
            localStorage.setItem('token', data.token)
            navigate('/courses')
        } catch (e: any) {
            setError(e.response?.data?.message || 'Login failed')
        }
    }

    async function signup(username: string, password: string) {
        try {
            await signUp({ username, password, roles: ['STUDENT'] })
            navigate('/login')
        } catch (e: any) {
            setError(e.response?.data?.message || 'Signup failed')
        }
    }

    return { login, signup, error }
}
