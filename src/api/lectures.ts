import client from './axios'
import type { Lecture } from '../types/lecture'

export const fetchLectures = (courseId: number) =>
    client.get<Lecture[]>(`/api/lectures/course/${courseId}`)