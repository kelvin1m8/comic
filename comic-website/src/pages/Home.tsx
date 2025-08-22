import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ComicList from '../components/ComicList';

const Home: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <h1>欢迎来到漫画世界</h1>
                <ComicList />
            </main>
            <Footer />
        </div>
    );
};

export default Home;