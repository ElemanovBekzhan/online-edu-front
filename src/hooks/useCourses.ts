// src/hooks/useCourses.ts
import { useQuery } from '@tanstack/react-query'
import client from '../api/axios'
import type { Course } from '../types/course'

export function useCourses() {
    return useQuery<Course[], Error>({
        queryKey: ['courses'],
        queryFn: async () => {
            const { data } = await client.get<Course[]>('/api/course')
            return data
        },
    })
}
