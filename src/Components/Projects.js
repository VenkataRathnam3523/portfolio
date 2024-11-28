import React from 'react';
import ProjectBox from './ProjectBox';
import notepad from '../images/notepad.png';
import anime from '../images/anime.png';
import carrent from '../images/carrent.png';
import digitalclock from '../images/digitalclock.png';
import chatapp from '../images/chatapp.png';
import portfolio from '../images/portfolio.png';
import movierecom from '../images/movierecom.png';
import weather from '../images/weather.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={digitalclock} projectName="DigitalClock" />
        <ProjectBox projectPhoto={notepad} projectName="NotePad" />
        <ProjectBox projectPhoto={anime} projectName="AnimePage" />
        <ProjectBox projectPhoto={carrent} projectName="CarRent" />
        <ProjectBox projectPhoto={chatapp} projectName="ChatApp" />
        <ProjectBox projectPhoto={portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={movierecom} projectName="MovieRecommend" />
        <ProjectBox projectPhoto={weather} projectName="Weather" />
      </div>
    </div>
  )
}

export default Projects