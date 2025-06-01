export interface Lecture {
    id: number;
    courseId: number;
    title: string;
    pdfUrl: string;
    uploadedAt: string;  // ISO-строка даты
}