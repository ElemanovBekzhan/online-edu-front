// src/components/Footer.tsx
import React from 'react'
import { Box, Container, Typography } from '@mui/material'

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{ py: 3, bgcolor: 'primary.dark', color: 'white' }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: '1920px',
                    mx: 'auto',
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography variant="body2">
                    © {new Date().getFullYear()} OnlineEdu
                </Typography>
            </Container>
        </Box>
    )
}
