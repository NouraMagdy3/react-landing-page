//images
import ImageProvied from '../../assests/img/provied.png';
//style
import './Provied.css';

const Provied = () => {

    return (
        <div className="container  mt-5 mb-5">
            <div className="row">
                <div className="col-md-6">
                    <img className="w-100" alt="" src={ImageProvied} />
                </div>
                <div className="col-md-6">
                    <div className="provied-item  mt-5 ">
                        <h1 className="mt-5">We Provide Many Features You Can Use</h1>
                        <p className="mt-3">You can explore the features that we provide with fun and have their own functions each feature.</p>
                        <p className="mt-5"><i className="fas fa-check"></i><span>Powerfull online protection.</span></p>
                        <p className="mt-1"><i className="fas fa-check"></i><span>Internet without borders.</span></p>
                        <p className="mt-1"><i className="fas fa-check"></i><span>Supercharged VPN</span></p>
                        <p className="mt-1"><i className="fas fa-check"></i><span>No specific time limits.</span></p>

                    </div>
                </div>
            </div>
        </div>
        )
}

export default Provied;