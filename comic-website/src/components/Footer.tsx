import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
            <p>&copy; {new Date().getFullYear()} Your Website Name. All rights reserved.</p>
            <div>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">Twitter</a> | 
                <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">Facebook</a> | 
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </footer>
    );
};

export default Footer;