import React, { useState } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

const Carousel = () => {
    const [photos, setPhotos] = useState([]);
    

return (
        <AwesomeSlider>
            <div data-src='https://res.cloudinary.com/dpkuxyam6/image/upload/v1703670416/btnfsa96mp27lkgt6yp9.png'/>
            <div data-src='https://res.cloudinary.com/dpkuxyam6/image/upload/v1701968049/sh23xrisdeeu6rg20sja.jpg'/>
            <div data-src='https://res.cloudinary.com/dpkuxyam6/image/upload/v1703674206/ire5oyz5bg9fy4dgvqx0.png'/>
        </AwesomeSlider> 
   )

}
   export default Carousel;