import React from 'react'
import './Watch.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Watch = () => {
  return (
    <div className='watch'>
        <div className="back">
            <ArrowBackIcon/>
            Home
        </div>

        <video className='video' autoPlay progress controls src=""/>
    </div>
  )
}
