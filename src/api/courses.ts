import client from './axios'
export const fetchCourses = () => client.get('/api/courses')