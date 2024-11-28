import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    DigitalClockDesc : "A digital clock displays time with numerical digits, often featuring LED or LCD screens. It typically shows hours, minutes, and sometimes seconds, providing an accurate, clear, and modern way to track time.",
    DigitalClockGithub : "https://github.com/VenkataRathnam3523/digitalclock",
    DigitalClockWebsite : "https://venkatarathnam3523.github.io/digitalclock/",

    NotePadDesc : "Notepad is a basic text editor used to create and edit plain text files. It offers minimal formatting options, making it simple and lightweight, ideal for quick notes or coding tasks.",
    NotePadGithub : "https://github.com/VenkataRathnam3523/Note",
    NotePadWebsite : "https://venkatarathnam3523.github.io/Note/",

    AnimePageDesc:"The anime page invites users to 'Embark on Your Legendary Journey,' showcasing dynamic characters in a fantasy world where heroes clash, offering adventure, battles, and an immersive experience.",
    AnimePageGithub:"https://github.com/VenkataRathnam3523/animatedpage",
    AnimePageWebsite:"https://venkatarathnam3523.github.io/animatedpage/",
    
    CarRentDesc:"The CarRent project is a Java-based car rental system that helps manage car availability, customer bookings, and rental transactions. Its a simple solution suitable for learning backend development and implementing a basic car rental service.",
    CarRentGithub:"https://github.com/VenkataRathnam3523/CarRent",
    CarReantWebsite:"https://github.com/VenkataRathnam3523/CarRent",

    ChatAppDesc:"The ChatApp repository is a Java-based chat application. It enables real-time messaging between users and provides core chat functionalities like sending and receiving messages. This project is useful for learning basic Java programming, especially for building applications that require user interaction through a chat interface.",
    ChatAppGithub:"https://github.com/VenkataRathnam3523/ChatApp",
    ChatAppWebsite:"https://github.com/VenkataRathnam3523/ChatApp",

    MovieRecommendDesc:"The Movie Recommendation app suggests personalized movie recommendations using data from an external movie API. It displays key movie details like title, poster, and description based on user preferences. You can explore the app here.",
    MovieRecommendGithub:"https://github.com/VenkataRathnam3523/Movie-Recommendation",
    MovieRecommendWebsite:"https://venkatarathnam3523.github.io/Movie-Recommendation/",

    WeatherDesc:"The Weather App is a web application that displays real-time weather updates by fetching data from an external API. It shows key weather details like temperature and conditions based on user input. You can explore it here",
    WeatherGithub:"https://github.com/VenkataRathnam3523/Weather-App",
    WeatherWebsite:"https://venkatarathnam3523.github.io/Weather-App/",


    PortfolioDesc:"A dynamic portfolio showcasing diverse skills and accomplishments, including design, development, and creative problem-solving. Highlights innovative projects, strong work ethic, and dedication to continuous growth in various fields.",
    PortfolioGithub:"https://github.com/VenkataRathnam3523/portfolio",
    PortfolioWebsite:"https://venkatarathnam3523.github.io/portfolio/",

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName + 'Desc']}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox