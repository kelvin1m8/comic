import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <h1 className="header-title">漫画网站</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="/">首页</a></li>
                    <li><a href="/comics">漫画列表</a></li>
                    <li><a href="/about">关于我们</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;