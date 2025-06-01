import { useQuery } from '@tanstack/react-query'
import { fetchLectures } from '../api/lectures'
import type { Lecture } from '../types/lecture'

export function useLectures(courseId: number) {
    return useQuery<Lecture[], Error>({
        queryKey: ['lectures', courseId],
        queryFn: async () => {
            const { data } = await fetchLectures(courseId)
            return data
        },
        enabled: !!courseId
    })
}