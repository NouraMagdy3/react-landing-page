
//images
import HeaderImage from '../../assests/img/header.png';
//style
import './Introdaction.css';

const Introdaction = () => {

    return (
        <div className="container mt-5 firstchild">
            <div className="row">
                <div className="col-md-6 col-12">
                    <h1>Want anything to be easy with LaslesVPN.</h1>
                    <p className="mt-4">Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
                    <button className="mt-5">Get Started</button>
                </div>
                <div className="col-md-6 col-12  d-md-block d-none"><img className="w-100" src={HeaderImage} alt="" /></div>
            </div>
        </div>
    );
}

export default Introdaction;