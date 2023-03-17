import React, { useEffect, useState } from 'react';

import Gif from '../Gif';

type resultProps = {
  data: [
    {
      id: number
      images: {
        original: {
          url: string;
        }      
      }
    }
  ];
}

export default function SearchBar() {
  const [queryInput, setQueryInput] = useState("happy dog")
  const [gifs, setGifs] = useState<resultProps>();
  const [offsetValue, setoffsetValue] = useState(0)

  const apiKey = '&api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8';
  const query = `&q=${queryInput}`;
  const limit = `&limit=12`;
  const offset = `&offset=${offsetValue}`;

  useEffect(() => {
    fetchData();
  }, [offset]);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?${apiKey}${query}${limit}${offset}`
      );
      const data = await response.json();
      setGifs(data)
    }
    catch (error) {
      console.error(`ERROR: ${error}`)
    }

  }

  return (
    <section className="searchBar gutter-medium" id="search">
      <form className="searchBar__form">
        <input onChange={(e) => setQueryInput(e.target.value)} className="searchBar__input" placeholder="Find gifs" value={queryInput} />
        <button onClick={(e) => {
          e.preventDefault();
          fetchData()
          }} 
          className="searchBar__btn btn btn--light"
        >
          Search
        </button>
      </form>
      <div className="searchBar__container-results">
        {
            gifs?.data.map(item => {
                return <Gif gif={item.images.original.url} id={item.id} key={item.id} />
            })
        }        
      </div>
      <button onClick={()=> setoffsetValue(prev => prev + 12)} className='searchBar__loadMore-btn btn'>Reload</button>
    </section>
  );
}
