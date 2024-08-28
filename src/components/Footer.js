// dependencies
import React, { useState, useRef, useEffect, useCallback } from 'react';
// music
import PokemonSong from '../assets/music/PokemonTheme.mp3';

const Footer = () => {
    const targetRef = useRef(null);
    const audio = useRef(new Audio(PokemonSong));

    const [playSong, setPlaySong] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleAudioClick = useCallback(() => {
        if (playSong) {
            audio.current.pause();
        } else {
            audio.current.play();
        }
        setPlaySong((prev) => (!prev));
    }, [playSong]);
    audio.current.addEventListener('ended', (event) => {
        setPlaySong(false);
    });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }
    }, []);

    return (
        <div className='footer-section-container'>
            <div
                ref={targetRef}
                className='footer-section'>
                <div className='follow-me'>
                    Follow me on&nbsp;
                    <span className='span-follow'></span>
                </div>
                <div className='copyright-text'>
                    {`Copyright Anish Sownderraj ©2024. All rights reserved.`}
                </div>
            </div>
            <div
                onClick={() => handleAudioClick()}
                className={`sound-section ${isVisible ? 'visible' : ''}`}
            >
                {!playSong ? (
                    <i className='material-symbols-outlined'>
                        equalizer
                    </i>
                ) : (
                    <i className='material-symbols-outlined'>
                        pause
                    </i>
                )}
            </div>
        </div >
    );
};

export default Footer;