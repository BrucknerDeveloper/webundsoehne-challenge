import React, { useEffect, useState } from 'react';

import Gif from '../Gif';

type resultProps = {
  data: [
    {
      images: {
        original: {
          url: string;
        };
      };
    }
  ];
};

export default function SearchBar() {
  const [state, setState] = useState<resultProps>({
    data: [
        {
            images: {
                original: {
                    url: ""
                }
            }
        } 
    ]
  });

  const apiKey = '&api_key=vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8';
  const query = '&q=dog';
  const limit = '&limit=12';

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?${apiKey}${query}${limit}`
      );
      const data = await response.json();
      setState(data);
    }

    

    fetchData();
  }, []);

  console.log(state)

  return (
    <section className="searchBar gutter-medium" id="search">
      <form className="searchBar__form">
        <input className="searchBar__input" placeholder="Find gifs" />
        <button className="searchBar__btn btn btn--light">Search</button>
      </form>
      <div className="searchBar__container-results">
        {
            state.data.map(item => {
                return <Gif gif={item.images.original.url} key={item.id} />
            })
        }
      </div>
    </section>
  );
}
