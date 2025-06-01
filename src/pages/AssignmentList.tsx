import React from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CircularProgress,
    Button,
    Box
} from '@mui/material'
import { useAssignments } from '../hooks/useAssignments'
import type { Assignment } from '../types/assignment'

export default function AssignmentList() {
    const { id } = useParams<{ id: string }>()
    const courseId = Number(id)
    const { data: assignments = [], isLoading, isError, error } = useAssignments(courseId)

    return (
        <Container
            maxWidth={false}
            sx={{ maxWidth: '1920px', mx: 'auto', py: 2, px: 2 }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
                <Typography variant="h4">Assignments</Typography>
                <Button
                    component={RouterLink}
                    to={`/courses/${courseId}`}
                    variant="outlined"
                >
                    Back to Course
                </Button>
            </Box>

            {isLoading ? (
                <Box textAlign="center" mt={4}>
                    <CircularProgress />
                </Box>
            ) : isError ? (
                <Typography color="error">Error: {error.message}</Typography>
            ) : assignments.length === 0 ? (
                <Typography>No assignments for this course.</Typography>
            ) : (
                <Grid container spacing={3}>
                    {assignments.map((a: Assignment) => (
                        <Grid item xs={12} sm={6} md={4} key={a.id}>
                            <Card
                                variant="outlined"
                                sx={{
                                    height: '100%',
                                    transition: 'transform 0.2s, box-shadow 0.2s',
                                    '&:hover': { transform: 'scale(1.03)', boxShadow: 3 }
                                }}
                            >
                                <CardContent>
                                    <Typography variant="h6">{a.title}</Typography>
                                    <Typography color="text.secondary" sx={{ mt: 1, mb: 1 }}>
                                        {a.description}
                                    </Typography>
                                    <Typography variant="caption" display="block" gutterBottom>
                                        Due: {new Date(a.dueDate).toLocaleDateString()}
                                    </Typography>
                                    <Button
                                        component={RouterLink}
                                        to={`/courses/${courseId}/assignments/${a.id}`}
                                        size="small"
                                        variant="contained"
                                    >
                                        View & Submit
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    )
}