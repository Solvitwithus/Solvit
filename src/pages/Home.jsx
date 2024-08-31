import React from 'react';
import Slideshow from '../components/slideshow';
import right from '../Assets/Vectorrightscroll.svg'
import left from '../Assets/Vectorleft-scroll.svg'
import '../styles/home.css'
import "../styles/industries.css"
import Recall from '../components/cardsrecall';
import Template from '../components/industries_template';
import dary from "../Assets/dairy.jpg"
import oil from "../Assets/oil.png"
import corn from "../Assets/corn.png"
import restaurant from "../Assets/restaurant.png"
import health from "../Assets/health.png"
import transport from "../Assets/transport.png"
import clothing from "../Assets/clothing.png"
import beer from "../Assets/beer.png"
import Footer from '../components/footer';
const images = [
 'track.png',
 'incident.png',
 'integration.png',
 'ERP.png'
    
    
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
     <Recall/>

        <div>
            <h2 className='client_section'>Some of Our Client Industries</h2>
            <p className='client_name'>Clients that have utilized our products for<br/>several years</p>
            <div className='temps'>
                <Template Source={dary} text={"Dairy industry"} />
                <Template Source={oil} text={"Oil industry"} />
                <Template Source={corn} text={"Milling industry"} />
                <Template Source={restaurant} text={"Food industry"} />
                <Template Source={health} text={"Health industry"} />
                <Template Source={transport} text={"Transport industry"} />
                <Template Source={clothing} text={"Clothing industry"} />
                <Template Source={beer} text={"Brewery industry"} />
            </div>
        </div>
        <Footer/>
        </>

    );
}

export default Home;