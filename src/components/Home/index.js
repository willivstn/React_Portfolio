import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-s.png';
import './index.scss';
import Logo from './Logo';
import WillieImg from '../../assets/images/willie.png';

import Loader from 'react-loaders';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [ 'i', 'l', 'l', 'i', 'e', ',']
    const jobArray = ['S', 'o', 'f', 't ', 'w', 'a', 'r', 'e', '', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    
    useEffect(
        () => {
          const t = setTimeout(
            () => {
              setLetterClass('text-animate-hover');
            },
            4000
          );
          return () => {
            clearTimeout(t);
          }
        },
        [],
      );

    return(
      <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                  <span className={`${letterClass} _14`}>H</span>
                  <span className={`${letterClass} _15`}>i</span>
                  <span className={`${letterClass} _16`}>,</span>
                  <br />
                  <span className={`${letterClass} _17`}>I</span>
                  <span className={`${letterClass} _18`}>'</span>
                  <span className={`${letterClass} _19`}>m</span>
                <img
                 src={LogoTitle} alt="JavaScript Developer Name, Web Developer"
                 />

                <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                 idx={15}
                />
                
                <br/>

                <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                 idx={15}
                />
                </h1>
                <h2>Web Development: HTML & CSS/ .NET / JavaScript / React / Git
                  <br/>
                  <br/>

                  Android Development: Java / Kotlin / Gradle 
                  <br/>
                  <br/>

                  Database Development: SQL / Firebase / Azure 
                </h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
            

        </div>
        <Loader type='pacman'/>
        </>
    )
}

export default Home