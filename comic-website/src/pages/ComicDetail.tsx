import React from 'react';

const ComicDetail: React.FC<{ title: string; author: string; cover: string; chapters: string[] }> = ({ title, author, cover, chapters }) => {
    return (
        <div className="comic-detail">
            <h1>{title}</h1>
            <h2>作者: {author}</h2>
            <img src={cover} alt={`${title} cover`} />
            <h3>章节列表</h3>
            <ul>
                {chapters.map((chapter, index) => (
                    <li key={index}>{chapter}</li>
                ))}
            </ul>
        </div>
    );
};

export default ComicDetail;