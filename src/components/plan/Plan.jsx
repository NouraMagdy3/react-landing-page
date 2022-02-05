import React, { useMemo } from 'react';
import classNames from 'classnames';
//image
import PlanImage from '../../assests/img/plan.png';
//style 
import './Plan.css';

const Statics = () => {

    const list = [
        {
            key: 1, image: { PlanImage }, title: 'Free Plan', check: {
                name: ['Unlimited Bandwitch', 'Encrypted Connection', 'No Traffic Logs', 'Works on All Devices'],
            }, price: 'Free', time: '', isselect: false
        },
        {
            key: 2, image: { PlanImage }, title: 'Standard Plan', check: {
                name: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware'],

            }, price: '$9', time: '/ m', isselect: false
        },
        {
            key: 3, image: { PlanImage }, title: 'Premium Plan', check: {
                name: ['Unlimited Bandwitch', 'Encrypted Connection', 'Yes Traffic Logs', 'Works on All Devices', 'Connect Anyware', 'Get New Features']
            }, price: '$12', time: '/ m', isselect: true
        },
    ]

    const listItem = useMemo(() => {
        return list.map((item) => {
            return (<div key={item.key} className="plan align-items-end position-relative">

                <img src={PlanImage} className="mt-5" alt={PlanImage} />
                <h4 className="mt-5">{item.title}</h4>
                <div className="pricingTable-header text-start">
                    {item.check.name.map((check, index) => {
                        return (
                            <p className="mt-5"><i className="fas fa-check "></i><span>{check}</span></p>
                        );
                    })}
                </div>
                <div className="footer-plan position-absolute mt-5">
                    <h3 className="fw-bolder">{item.price}
                        <span className="fw-lighter text-muted m-0">{item.time}</span></h3>
                    <button className={classNames("mt-5 btn-menu", item.isselect ? 'button-select' : '')}>select</button>
                </div>
            </div>)
        })
    }, []);

    return (
        <div className="bg-light plans text-center mt-5 mb-5 p-5">
            <h3 className="h1">Choose Your Plan</h3>
            <p className="mb-5">Let's choose the package that is best for you and explore it happily and cheerfully.</p>
            <div className="d-flex justify-content-center align-items-center plan-prent">
                {listItem}
            </div>
        </div>
        )
}


export default Statics;