export interface Comic {
    id: string;
    title: string;
    author: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
}

export interface UploadResponse {
    success: boolean;
    message: string;
    comicId?: string;
}