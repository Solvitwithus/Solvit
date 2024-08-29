import React, { useState, useEffect } from 'react';
import '../styles/slideshow.css'
function Slideshow({ images }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images]);

    return (
        <div className='bgcolor'>
            <img src={images[index]} alt={`Slideshow image ${index}`} className='advimages'/>
        </div>
    );
}

export default Slideshow;