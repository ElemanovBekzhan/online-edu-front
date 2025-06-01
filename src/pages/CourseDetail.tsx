// @ts-ignore
import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import {
    Container,
    Typography,
    List,
    ListItem,
    ListItemText,
    Button,
    Box,
    CircularProgress
} from '@mui/material';
import { useCourse } from '../hooks/useCourses';

export default function CourseDetail() {
    // Берём :id из URL
    const { id } = useParams<{ id: string }>();
    const courseId = id || ''

    // Запрашиваем данные по конкретному курсу
    const {
        data: course,
        isLoading,
        isError,
        error
    } = useCourse(courseId);

    // Если курс ещё загружается
    if (isLoading) {
        return (
            <Box textAlign="center" mt={4}>
                <CircularProgress />
            </Box>
        );
    }

    // Если при запросе произошла ошибка
    if (isError || !course) {
        return (
            <Typography color="error" textAlign="center" mt={4}>
                Ошибка загрузки курса: {error?.message || 'Unknown error'}
            </Typography>
        );
    }

    // Когда данные успешно получены
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
            <Box sx={{ mb: 3 }}>
                <Typography variant="h4">{course.title}</Typography>
                <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {course.description}
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    Преподаватель: {course.teacherUsername}
                </Typography>
                <Typography variant="subtitle2" sx={{ mt: 1 }}>
                    Дата создания: {new Date(course.createdAt).toLocaleDateString()}
                </Typography>
            </Box>

            {/* Кнопка “Назад к списку” */}
            <Box sx={{ mb: 2 }}>
                <Button
                    component={RouterLink}
                    to="/courses"
                    variant="outlined"
                >
                    ← Back to Courses
                </Button>
            </Box>

            {/* Здесь (по желанию) можно вывести список лекций, ссылку на Assignments и т.п. */}
            <Typography variant="h5" gutterBottom>
                Lectures (загрузка лекций можно сделать отдельным хукeм 👇)
            </Typography>
            {/* Например, если у вас уже есть useLectures, можно вызвать его здесь:
          const { data: lectures, isLoading: lectLoad } = useLectures(courseId);
          и отобразить список лекций.
      */}
        </Container>
    );
}
