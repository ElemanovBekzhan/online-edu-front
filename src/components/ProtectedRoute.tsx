import React from 'react'
import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
    const token = localStorage.getItem('token')
    if (!token) {
        // если нет токена — кидаем на вход
        return <Navigate to="/login" replace />
    }
    return children
}
