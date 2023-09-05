import React from 'react'
import './Watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useLocation } from 'react-router-dom';

export const Watch = () => {
  const location = useLocation();
  const movie = location.movie;
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>

        <video className='video' autoPlay progress controls src={movie}/>
    </div>
  )
}
