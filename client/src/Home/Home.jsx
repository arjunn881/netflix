import React from 'react'
import './Home.scss';
import { Navbar } from '../Components/Navbar/Navbar';
import { Featured } from '../Components/Featured/Featured';
import { List } from '@mui/material';

export const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type="movie"/>
        <List/>
    </div>
  )
}
