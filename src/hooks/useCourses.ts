// src/hooks/useCourses.ts
import { useQuery } from '@tanstack/react-query'
import client from '../api/axios'
import type { Course } from '../types/course'
import { fetchCourse } from '../api/courses.ts';
export function useCourses() {
    return useQuery<Course[], Error>({
        queryKey: ['courses'],
        queryFn: async () => {
            const { data } = await client.get<Course[]>('/api/course')
            return data
        },
    })
}

/**
 * Хук для запроса details конкретного курса по courseId.
 * Возвращает { data, isLoading, isError, error }.
 */
export function useCourse(courseId: string) {
    return useQuery<Course, Error>({
        queryKey: ['course', courseId],
        queryFn: async () => {
            const { data } = await fetchCourse(courseId);
            return data;
        },
        enabled: !!courseId, // запрос только если есть валидный courseId
        // По желанию можно добавить staleTime, refetchOnWindowFocus и т.п.
    });
}
