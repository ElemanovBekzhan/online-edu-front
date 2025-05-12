// src/pages/CoursesList.tsx
import React from 'react'
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CircularProgress,
    Box
} from '@mui/material'
import { useCourses } from '../hooks/useCourses'

export default function CoursesList() {
    const { data: courses = [], isLoading, isError, error } = useCourses()

    if (isLoading) {
        return (
            <Box textAlign="center" mt={4}>
                <CircularProgress />
            </Box>
        )
    }
    if (isError) {
        return (
            <Container>
                <Typography color="error">Error: {error?.message}</Typography>
            </Container>
        )
    }

    return (
        <Container
            maxWidth={false}
            sx={{
                maxWidth: '1920px',
                mx: 'auto',
                py: 2,
                px: 2
            }}
        >
            <Typography variant="h4" sx={{ mb: 3, textAlign: 'center' }}>
                Courses
            </Typography>

            {courses.length === 0 ? (
                <Typography align="center">No courses available.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {courses.map(course => (
                        <Grid item xs={12} sm={6} md={4} key={course.id}>
                            <Card
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': {
                                        transform: 'scale(1.03)',
                                        boxShadow: 3
                                    }
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6">{course.title}</Typography>
                                    <Typography color="text.secondary" sx={{ mt: 1 }}>
                                        {course.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    )
}
