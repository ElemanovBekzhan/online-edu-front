// src/App.tsx
import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import CoursesList from './pages/CoursesList'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import { Box, CssBaseline } from '@mui/material'
import './App.css'
import AssignmentList from "./pages/AssignmentList.tsx";
import CourseDetail from "./pages/CourseDetail.tsx";

export default function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

            <CssBaseline />
            <Header />
            <Box
                component="main"
                sx={{
                    flex: 1,
                    overflow: 'auto',
                    bgcolor: 'background.default',
                    px: 2,
                    py: 4
                }}
            >
                <Routes>
                    <Route path="/" element={<Navigate to="/signup" replace />} />
                    <Route path="/signup" element={<SignupPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route
                        path="/courses"
                        element={
                            <ProtectedRoute>
                                <CoursesList />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/courses/:id"
                        element={
                            <ProtectedRoute>
                                <CourseDetail />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/courses/:id/assigments"
                        element={
                        <ProtectedRoute>
                            <AssignmentList />
                        </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to="/signup" replace />} />
                </Routes>
            </Box>
            <Footer />
        </Box>
    )
}
