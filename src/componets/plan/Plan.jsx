import React, { useMemo } from 'react';


//image
import PlanImage from '../../assets/plan.png';

//style 
import './Plan.css'
import classNames from 'classnames';
const Statics = () => {
    const list = [
        {
            key: 1, image: { PlanImage }, title: 'Free Plan', check: {
                name: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'],
            }, price: 'Free', isselect: false
        },
        {
            key: 2, image: { PlanImage }, title: 'Standard Plan', check: {
                name: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware'],

            }, price: '$9/ mo', isselect: false
        },
        {
            key: 3, image: { PlanImage }, title: 'Premium Plan', check: {
                name: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features']
            }, price: '$12/ mo', isselect: true
        },
    ]

    const listItem = useMemo(() => {
        return list.map((item) => {
            return (<div key={item.key} className="  plan   align-items-end position-relative">

                <img src={PlanImage} className="mt-5" alt={PlanImage} />
                <h1 className="mt-5">{item.title}</h1>
                <div className="pricingTable-header">
                    {item.check.name.map((check, index) => {
                        return (
                            <div className="mt-5" key={index}><i className="fas fa-check"></i><span className="">Powerfull online protection.</span></div>
                        );
                    })}
                </div>
                <div className="footer-plan position-absolute mt-5 ">
                    <p className=" h3">{item.price}</p>
                    <button className={classNames("mt-5 btn-menu", item.isselect ? 'button-select' : '')}>select</button>
                </div>  </div>)
        })
    }, []);
    return (

        <div className="container plans text-center  mt-5 mb-5">
            <h3 className="h1">Choose Your Plan</h3>
            <p className="mb-5">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            <div className="d-flex justify-content-center align-items-center plan-prent ">

                {listItem}


            </div>
        </div>)
}


export default Statics;