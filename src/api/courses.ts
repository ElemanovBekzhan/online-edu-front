import client from './axios'
import type { Course } from '../types/course';
export const fetchCourses = () => client.get('/api/course')

/** Получить детали одного курса по ID */
export const fetchCourse = (id: string) =>
    client.get<Course>(`/api/course/${id}`);