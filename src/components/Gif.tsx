import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { actions } from "../store"

export default function Intro(props: any) {
    const dispatch = useDispatch()
    const gifs = useSelector((state: any) => {
        return state
    })

    return (
        <div className="gif">
        <img className="gif__img" src={props.gif} />
        {gifs.find((item: any) => item.id === props.id) ? 
        <svg 
            onClick={() => dispatch(actions.removeFavourite({id: props.id, url: props.gif}))} 
            className="gif__heart" 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" 
            width="48"
        >
        <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1Z" />
        </svg> :
        <svg 
            onClick={() => dispatch(actions.addFavourite({id: props.id, url: props.gif}))} 
            className="gif__heart"
            xmlns="http://www.w3.org/2000/svg" 
            height="48" 
            width="48"
        >
            <path d="m24 41.95-2.05-1.85q-5.3-4.85-8.75-8.375-3.45-3.525-5.5-6.3T4.825 20.4Q4 18.15 4 15.85q0-4.5 3.025-7.525Q10.05 5.3 14.5 5.3q2.85 0 5.275 1.35Q22.2 8 24 10.55q2.1-2.7 4.45-3.975T33.5 5.3q4.45 0 7.475 3.025Q44 11.35 44 15.85q0 2.3-.825 4.55T40.3 25.425q-2.05 2.775-5.5 6.3T26.05 40.1ZM24 38q5.05-4.65 8.325-7.975 3.275-3.325 5.2-5.825 1.925-2.5 2.7-4.45.775-1.95.775-3.9 0-3.3-2.1-5.425T33.5 8.3q-2.55 0-4.75 1.575T25.2 14.3h-2.45q-1.3-2.8-3.5-4.4-2.2-1.6-4.75-1.6-3.3 0-5.4 2.125Q7 12.55 7 15.85q0 1.95.775 3.925.775 1.975 2.7 4.5Q12.4 26.8 15.7 30.1 19 33.4 24 38Zm0-14.85Z" />
        </svg>
        }
        <svg 
            onClick={() => navigator.clipboard.writeText(props.gif)}
            className='gif__copy-icon' 
            xmlns="http://www.w3.org/2000/svg" 
            height="48" 
            width="48"
        >
            <path d="M9 43.95q-1.2 0-2.1-.9-.9-.9-.9-2.1V10.8h3v30.15h23.7v3Zm6-6q-1.2 0-2.1-.9-.9-.9-.9-2.1v-28q0-1.2.9-2.1.9-.9 2.1-.9h22q1.2 0 2.1.9.9.9.9 2.1v28q0 1.2-.9 2.1-.9.9-2.1.9Z"/>
        </svg>
    </div>    
        
    );
}
