import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(
        () => {
          const t = setTimeout(
            () => {
              setLetterClass('text-animate-hover');
            },
            3000
          );
          return () => {
            clearTimeout(t);
          }
        },
        [],
      );



    
    return (
        
        <>
        
        <div className='container about-page'>
        
        

            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                    I am an entry-level Software Developer offering a strong foundation in software engineering and programming
                    principles across multiple platforms.
                    Experienced in object-oriented programming; developing, testing, and debugging code; designing interfaces; and
                    administering systems and networks.
                    I am able to quickly learn and master new technologies; I'm successful working in both teams and self-directed
                    settings.
                </p>
                <p>
                    I'm quietly confident, naturally curious, and perpetually working on improving my skills
                </p>
                <p>
                    One of my strengths is that I am passionate to learn new things and to create create opportunities to implement those skills
                </p>
                

            </div>

            

            <div className='stage-cube-cont'>
                
                <div className='cubespinner'>
                    
                    <div className='face1'>
                        <FontAwesomeIcon icon={faAngular} color="#DD0031"/>

                    </div>

                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5} color="#DD0031"/>

                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3} color="#DD0031"/>

                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faReact} color="#DD0031"/>

                    </div>

                    <div className='face5'>
                        <FontAwesomeIcon icon={faJsSquare} color="#DD0031"/>

                    </div>

                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt} color="#DD0031"/>

                    </div>

                </div>

            </div>
            

            
        </div>
        <Loader type='pacman'/>
        </>
        
    )
}

export default About