import React from 'react';
import { Button } from 'react-bootstrap';
//style
import './subscribe.css';

const Subscribe = () => {
    return (
        <div className='subscribe bg-white p-5 box-shadow'>
            <div className='d-flex justify-content-between align-items-center flex-wrap'>
                <div>
                    <h2 className='mb-1 fw-bolder'>Subscribe Now for 
                        <br></br>Get Special Features!</h2>
                    <p>Let's subscribe with us and find the fun.</p>
                </div>
                <Button className='subscribeBtn fw-bolder border-0'>Subscribe Now</Button>
            </div>
        </div>
    );
}

export default Subscribe;