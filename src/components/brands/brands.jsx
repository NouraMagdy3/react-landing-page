import React from 'react';
import { useMemo } from 'react';
//images
import brand1 from '../../assests/img/Mask Group.png';
import brand2 from '../../assests/img/Mask Group (1).png';
import brand3 from '../../assests/img/Mask Group (2).png';
import brand4 from '../../assests/img/Mask Group (3).png';
import brand5 from '../../assests/img/Mask Group (4).png';
//style
import './brands.css';

//const
const brandsImages = [
    {
        id: 1,
        src: brand1,
    },
    {
        id: 2,
        src: brand2,
    },
    {
        id: 3,
        src: brand3,
    },
    {
        id: 4,
        src: brand4,
    },
    {
        id: 5,
        src: brand5,
    }
]

const Brands = () => {

    //useMemo
    const renderBrandsImages = useMemo(() => {
        return brandsImages.map((brandImage) => {
            return (
                <img data-testid='brandIm' src={brandImage.src} alt='brand' key={brandImage.id} />
            )
        })
    }, []);

    return (
        <div className='brands mt-5 mb-5'>
            <div className='d-flex justify-content-center align-items-center flex-wrap'>
                {renderBrandsImages}
            </div>
        </div>
    );
}

export default Brands;