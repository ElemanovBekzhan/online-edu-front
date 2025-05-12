export interface Course {
    id: number;
    title: string;
    description: string;
    teacherId: number;
    teacherUsername: string;
    createdAt: string; // или Date, если сможете парсить
}