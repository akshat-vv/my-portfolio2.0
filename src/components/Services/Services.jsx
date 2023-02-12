import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf';

const Services = () => {
  return (
    <div className='services'>
        <div className="awesome">
        <span>My Awesome</span>
        <span>Skills</span>
        <span>
            Loreum ipsum is simpley dummy text of printing of printing
            <br/>
            ispum is simpley dummy text of printing.
        </span>
        <a href={Resume} download>
        <button className='button s-button'>Download CV</button>
        </a>
        <div className='blur s-blur' style={{background:'#ABF1FF94'}}></div>
        </div>
        <div className="cards">
            <div style={{left:'25rem'}}>
            <Card emoji={HeartEmoji} heading={"Design"} details={"Figma, Sketch, Photoshop, Adobe XD"}/>
            </div>
            <div style={{left:'10rem',top:'10rem'}}>
            <Card emoji={Glasses} heading={"Developer"} details={"React, Redux, JavaScript, Html, CSS"}/>
            </div>
            <div style={{left:'28rem',top:'17rem'}}>
            <Card emoji={Humble} heading={"UI/Ux"} details={"Loreum Ipsum comes on the web"}/>
            </div>
        </div>
    </div>
  )
}

export default Services