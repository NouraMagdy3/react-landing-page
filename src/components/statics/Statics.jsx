import React, { useMemo } from 'react';
import classNames from 'classnames';
//styles
import './Statics.css';

const Statics = () => {
    const list = [
        { key: 1, 'icon': "fas fa-user icon", "number": 90, 'text': 'Users' },
        { key: 2, 'icon': "fas fa-map-marker-alt icon", "number": 30, 'text': 'Locations' },
        { key: 3, 'icon': "fas fa-server icon", "number": 50, 'text': 'Servers' }
    ]

    const listItem = useMemo(() => {
        return list.map((item) => {
            return (<div key={item.key} className="col-md-4 col-12 information">
                <div className={classNames("d-flex", "align-items-center", " justify-content-center", "data-icons", { "data-icon-border": item.key !== 3, })}>
                    <span ><i className={item.icon}></i></span>
                    <div className="ms-3">
                        <h4 className="mb-0">{item.number}+</h4>
                        <p className="mb-0">{item.text}</p>
                    </div>
                </div>
            </div>)
        })
    }, []);

    return (
        <div className="container statics mt-5 mb-5">
            <div className="row icon-bar m-0">
                {listItem}
            </div>
        </div>
        )
}

export default Statics;