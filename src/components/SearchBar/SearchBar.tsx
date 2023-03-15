import React from "react"

import Gif from "../gif"

export default function SearchBar() {

    return (
        <section className="searchBar gutter-medium" id="search">
            <form className="searchBar__form">
                <input 
                className="searchBar__input" 
                placeholder="Find gifs" 
                />
                <button className="searchBar__btn btn btn--light">Search</button>
            </form>
            <div className="searchBar__container-results">
                <Gif />
                <Gif />
                <Gif />
                <Gif />
                <Gif />
                <Gif />
                <Gif />
                <Gif />
                <Gif />
                <Gif />
            </div>
        </section>
    )
}