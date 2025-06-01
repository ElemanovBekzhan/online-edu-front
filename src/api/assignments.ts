import client from './axios'
import type { Assignment } from '../types/assignment'

export const fetchAssignments = (courseId: number) =>
    client.get<Assignment[]>(`/api/assignments/course/${courseId}`)