import React from "react";
import { Container } from 'react-bootstrap';
//images
import networkImg from "../../assests/img/Huge Global.png";
//style
import "./network.css";

const Network = () => {
    return (
        <div className="network text-center">
            <Container>
                <h2 className="mb-3 fw-bolder">Huge Global Network
                    <br></br> of Fast VPN</h2>
                <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
                <div className="text-center">
                <img src={networkImg} alt="network" className="mt-5 img-fluid" />
                </div>
            </Container>
        </div>
    );
}

export default Network;