import React from 'react';
import Slideshow from '../components/slideshow';
import About from './about';
import right from '../Assets/Vectorrightscroll.svg'
import left from '../Assets/Vectorleft-scroll.svg'
import '../styles/home.css'

const images = [
   'appdev.png',
    'webdev.png',
    'googleadv.png',
    'cloud.png',
    'analytics.png',
    'erp.png'
    
    
];

function Home() {
    return (
        <>        <div>
            <Slideshow images={images}/>
           
        </div>
        <span className='right_svg'>
        <img src={right} />
        </span>
        <span className='left_svg'>
        <img src={left} />
        </span>
     <About/>

        </>

    );
}

export default Home;