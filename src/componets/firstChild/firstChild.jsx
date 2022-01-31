
import HeaderImage from '../../assets/header.png';
import './firstChild.css'
import classNames from 'classnames';
const FirstChild = () => {
    const list = [
        { key: 1, 'icon': "fas fa-user icon", "number": 90, 'text': 'Users' },
        { key: 2, 'icon': "fas fa-map-marker-alt icon", "number": 30, 'text': 'Locations' },
        { key: 3, 'icon': "fas fa-user icon", "number": 50, 'text': 'Servers' }
    ]

    const listItem = list.map((item) => {
        return (<div key={item.key} className="col-md-4  col-12 information">
            <div className={classNames("d-flex", "align-items-center", " justify-content-center", "data-icons", { "data-icon-border": item.key !== 3, })}>
                <span ><i className={item.icon}></i></span>
                <div className="ms-3">
                    <h4 className="mb-0">{item.number}+</h4>
                    <p className="mb-0">{item.text}</p>
                </div>
            </div>
        </div >)
    })
    return (

        <div class="container  firstchild">
            <div className="row">
                <div className="col-md-6 col-6">
                    <h1>Want anything to be easy with LaslesVPN.</h1>
                    <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <button>Get Started</button>
                </div>
                <div class="col-md-6 col-6"><img src={HeaderImage} /></div>
            </div>
            <div className="container">
                <div className="row icon-bar m-auto mt-5">
                    {listItem}



                </div>
            </div>

        </div>

    );
}

export default FirstChild;