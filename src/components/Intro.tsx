import React, { useEffect, useRef } from 'react';

// --- GSAP ---
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//imgs
import heroImage from '../assets/upscaledVersionChallenge.jpg';

export default function Intro() {
    const containerRef = useRef(null);

    useEffect(() => {
        const elements = [...containerRef.current?.children];

        elements.forEach((child: any) => {
            const timeline = gsap.timeline();
            timeline.fromTo(elements,
                {
                    y: -20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: .75,
                    ease: "power1.inOut",
                    stagger: {
                        from: "start",
                        amount: .1
                    }
                },
            )
        })
    }, [])

    return (
        <section className='intro gutter-medium'>
            <div className='intro__container-text' ref={containerRef}>
                <h3 className='intro__author subtitle'>made by Daniel Bruckner</h3>
                <h1 className='intro__title title'>
                    Pick your <br /> gifs
                </h1>
                <p className='intro__description paragraph'>
                    GIFs are popular on the internet for conveying emotions, reactions, or conveying
                    a message in a humorous or creative way.{' '}
                </p>
                <button className='intro__btn btn'>
                    <a href='#search'>
                        Discover gifs
                    </a>
                </button>
            </div>
            <img className='intro__hero-img' alt='creative introduction img' src={heroImage} />
        </section>
    );
}
