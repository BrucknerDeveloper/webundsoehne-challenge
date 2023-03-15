import React from "react"

//imgs
import heroImage from "../assets/upscaledVersionChallenge.jpg"

export default function Intro() {

    return (
        <section className="intro gutter-medium">
            <div className="intro__container-text">
                <h3 className="intro__author subtitle">made by Daniel Bruckner</h3>
                <h1 className="intro__title title">Pick your <br/> gifs</h1>
                <p className="intro__description paragraph">GIFs are popular on the internet for conveying emotions, reactions, or conveying a message in a humorous or creative way. </p>
                <a className="intro__btn btn" aria-label="button" href="#search">Discover gifs</a>
            </div>
            <img className="intro__hero-img" src={heroImage} />
        </section>
    )
}