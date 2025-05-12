// src/components/Header.tsx
import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Box
} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

export default function Header() {
    return (
        <AppBar position="static" color="primary">
            <Container
                maxWidth={false}
                sx={{ maxWidth: '1920px', mx: 'auto', px: 2 }}
            >
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography
                        variant="h6"
                        component={RouterLink}
                        to="/"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            fontWeight: 'bold',
                            letterSpacing: 1
                        }}
                    >
                        OnlineEdu
                    </Typography>

                    <Box>
                        {[
                            { to: '/courses', label: 'Courses' },
                            { to: '/login',   label: 'Sign In' },
                            { to: '/signup',  label: 'Sign Up' }
                        ].map(({ to, label }) => (
                            <Button
                                key={label}
                                component={RouterLink}
                                to={to}
                                sx={{
                                    color: 'inherit',
                                    mx: 1,
                                    transition: 'transform 0.2s, background-color 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        backgroundColor: 'rgba(255,255,255,0.1)'
                                    }
                                }}
                            >
                                {label}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
