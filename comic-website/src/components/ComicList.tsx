import React from 'react';

interface Comic {
    id: number;
    title: string;
    author: string;
    coverImage: string;
}

interface ComicListProps {
    comics: Comic[];
}

const ComicList: React.FC<ComicListProps> = ({ comics }) => {
    return (
        <div className="comic-list">
            {comics.map(comic => (
                <div key={comic.id} className="comic-item">
                    <img src={comic.coverImage} alt={comic.title} />
                    <h3>{comic.title}</h3>
                    <p>By: {comic.author}</p>
                </div>
            ))}
        </div>
    );
};

export default ComicList;