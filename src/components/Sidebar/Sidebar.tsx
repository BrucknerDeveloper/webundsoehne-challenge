import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Gif from "../Gif"
import useIsMobile from "../../customHooks/useIsMobile"

export default function Sidebar() {
  // --- STATE/DATA  ---
  const [show, setShow] = useState(false)
  const [shouldRender, setRender] = useState(false);
  const isMobile: boolean = useIsMobile()
  const gifs = useSelector((state: any) => {
    return state
  })

  // --- HOOKS  ---
  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };


  // --- STYLES  ---
  const btnStyles = {
    marginLeft: show ? isMobile ? "250px" : "30vw" : "0"
  }

  const svgStyles = {
    transform: show ? "rotate(180deg)" : ""
  }

  const sideBarContainerStyles = {
    animation: `${show ? "slideIn" : "slideOut"} .25s linear`,
  }

  return (
    <div className="sidebar" >
      <div style={btnStyles} className="sidebar__btn" onClick={() => setShow(prevState => !prevState)}>
        <svg style={svgStyles} xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z" />
        </svg>
      </div>
      {
        shouldRender && 
        <div 
          className='sidebar__container'
          onAnimationEnd={onAnimationEnd}
          style={sideBarContainerStyles}
        >
          {
            gifs.length ?
            gifs.map((item: any)=> {
              return <Gif gif={item.url} id={item.id} key={item.id} />
            }) :
            <h2 className='sidebar__fallbackText paragraph'>Seems you don't have any favourite gifs yet...</h2>
          }
        </div>
      }
    </div>
  );
}
