// src/pages/SignupPage.tsx
import React, { useState } from 'react'
import { Container, Typography, TextField, Button } from '@mui/material'
import { useAuth } from '../hooks/useAuth'

export default function SignupPage() {
    const { signup, error: backendError } = useAuth()

    // Локальные стейты для полей
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState<{ username?: string; password?: string }>({})

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const errs: typeof errors = {}
        if (!username.trim()) errs.username = 'Username is required'
        if (!password) errs.password = 'Password is required'
        setErrors(errs)
        if (Object.keys(errs).length) return

        // вызываем хук
        signup(username, password)
    }

    return (
        <Container maxWidth="xs" sx={{ mt: 8 }}>
            <Typography variant="h5" gutterBottom>
                Sign Up
            </Typography>
            <form noValidate onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    error={!!errors.username}
                    helperText={errors.username}
                />
                <TextField
                    label="Password"
                    type="password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    error={!!errors.password}
                    helperText={errors.password}
                />
                {backendError && (
                    <Typography color="error" sx={{ mt: 1 }}>
                        {backendError}
                    </Typography>
                )}
                <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                    Register
                </Button>
            </form>
        </Container>
    )
}
