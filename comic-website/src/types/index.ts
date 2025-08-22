// This file defines the TypeScript types and interfaces used in the project.

export interface Comic {
    id: number;
    title: string;
    author: string;
    coverImage: string;
    chapters: Chapter[];
}

export interface Chapter {
    chapterNumber: number;
    title: string;
    releaseDate: string;
    content: string; // URL or path to the chapter content
}