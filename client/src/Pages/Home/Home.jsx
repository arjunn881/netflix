import React from 'react'
import './Home.scss';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Featured } from '../../Components/Featured/Featured';
import { List } from '../../Components/List/List';



export const Home = ({ type }) => {
  return (
    <div className='home'>
        <Navbar/>
        <Featured type={type}/>
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
  )
}
