import React from 'react'
import './Home.scss';
import { Navbar } from '../Components/Navbar/Navbar';

export const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <img width="100%" src="https://img.freepik.com/free-photo/collage-with-cars-seaside_23-2150385868.jpg?w=740&t=st=1693072516~exp=1693073116~hmac=1350ce7d95486106cc3f20b629a49ae51f5696825284653761088a27afa65cc3" alt="" />
    </div>
  )
}
