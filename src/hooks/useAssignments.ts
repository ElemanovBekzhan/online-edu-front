import { useQuery } from '@tanstack/react-query'
import { fetchAssignments } from '../api/assignments'
import type { Assignment } from '../types/assignment'

export function useAssignments(courseId: number) {
    return useQuery<Assignment[], Error>({
        queryKey: ['assignments', courseId],
        queryFn: async () => {
            const { data } = await fetchAssignments(courseId)
            return data
        },
        enabled: !!courseId
    })
}