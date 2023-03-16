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
};

export default function SearchBar() {
  const [queryInput, setQueryInput] = useState("happy dog")
  const [state, setState] = useState<resultProps>();

  const apiKey = '&api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8';
  const query = `&q=${queryInput}`;
  const limit = '&limit=10';

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?${apiKey}${query}${limit}`
      );
      const data = await response.json();
      setState(data);
    }
    catch (error) {
      console.error(`ERROR: ${error}`)
    }
  }

  console.log(state)

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
            state?.data.map(item => {
                return <Gif gif={item.images.original.url} id={item.id} key={item.id} />
            })
        }
      </div>
    </section>
  );
}
