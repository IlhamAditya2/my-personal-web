import React, { useEffect, useState } from 'react';
import './Home.css'; // kalau kamu punya style khusus


const Home = () => {
    const words = ['Web Developer', 'Cyber Security'];
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const updatedText = isDeleting
        ? currentWord.substring(0, charIndex - 1)
        : currentWord.substring(0, charIndex + 1);

        setText(updatedText);

        let timeout = isDeleting ? 100 : 200;

        if (!isDeleting && charIndex === currentWord.length) {
        timeout = 5000;
        setIsDeleting(true);
        } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        timeout = 5000;
        }

        const timer = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
        }, timeout);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, wordIndex]);






    return (
        <>
        {/* Konten */}
        <div className="container">
            <div className="intro-section">
            <div className="intro-text">
                <p className="high">Hello World, I'm</p>
                <div className="fade-in-up">
                <h1>Ilham Aditya Pratama</h1>
                <div className='typing-container'>
                    <span className="typed-text">{text}</span>
                    <span className="cursor">|</span>
                </div>
                <p className="high2">Welcome to my personal website</p>
                </div>
            </div>
            <div className="intro-photo fade-in-right">
                <img src="/sy1.png" alt="Foto Ilham" />
            </div>
            </div>
        </div>
        </>
    );
};

export default Home;