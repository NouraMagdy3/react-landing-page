import React from 'react';
//images
import brand1 from '../../assests/img/Mask Group.png';
import brand2 from '../../assests/img/Mask Group (1).png';
import brand3 from '../../assests/img/Mask Group (2).png';
import brand4 from '../../assests/img/Mask Group (3).png';
import brand5 from '../../assests/img/Mask Group (4).png';
//style
import './brands.css';

const Brands = () => {
    return (
        <div className='brands mt-5 mb-5'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                <img src={brand1} alt='' />
                <img src={brand2} alt='' />
                <img src={brand3} alt='' />
                <img src={brand4} alt='' />
                <img src={brand5} alt='' />
            </div>
        </div>
    );
}

export default Brands;