import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import Gif from "../Gif"

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false)
  const gifs = useSelector((state: any) => {
    return state
  })

  const btnStyles = {
    marginLeft: showSidebar ? "30vw" : "0"
  }

  console.log(gifs)

  return (
    <div className="sidebar" >
      <div style={btnStyles} className="sidebar__btn" onClick={() => setShowSidebar(prevState => !prevState)}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
        </svg>
      </div>
      {
        showSidebar && 
        <div className='sidebar__container'>
          {
            gifs.map((item: any)=> {
              return <Gif gif={item.url} id={item.id} key={item.id} />
            })
          }
        </div>
      }
    </div>
  );
}
