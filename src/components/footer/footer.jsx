import { Col, Container, Row } from "react-bootstrap";
//images
import logo from "../../assests/img/Logo.png";
import facebookImg from "../../assests/img/Facebook.png";
import twitterImg from "../../assests/img/Twitter.png";
import instaImg from "../../assests/img/Instagram.png";

//style
import "./footer.css";


const Footer = () => {

    return (
        <div className="footer text-left bg-light pb-5">
            <Container>
                <Row>
                    <div className="col-md-5 col-12">
                        <Col>
                            <img src={logo} alt="" className="mb-4" />
                            <p><strong>LaslesVPN</strong> is a private virtual network that <br></br> has unique features and has high security.</p>
                            <div className="social my-4">
                                <a href="/">
                                    <span className="me-3">
                                        <img src={facebookImg} alt="facebook" />
                                    </span>
                                </a>
                                <a href="/">
                                    <span className="me-3">
                                        <img src={twitterImg} alt="twitter" />
                                    </span>
                                </a>
                                <a href="/">
                                    <span className="me-3">
                                        <img src={instaImg} alt="instagram" />
                                    </span>
                                </a>
                            </div>
                            <p className="rights">©2020LaslesVPN</p>
                        </Col>
                    </div>
                    <div className="col-md-7 col-12">
                        <Row>
                            <div className="col-md-4 col-12">
                                <h6 className="mb-4 fw-bold">Product</h6>
                                <div className="d-flex flex-column">
                                    <a href="/">Download</a>
                                    <a href="/">Pricing</a>
                                    <a href="/">Locations</a>
                                    <a href="/">Server</a>
                                    <a href="/">Countries</a>
                                    <a href="/">Blog</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <h6 className="mb-4 fw-bold">Engage</h6>
                                <div className="d-flex flex-column">
                                    <a href="/">LaslesVPN ?</a>
                                    <a href="/">FAQ</a>
                                    <a href="/">Tutorials</a>
                                    <a href="/">About Us</a>
                                    <a href="/">Privacy Policy</a>
                                    <a href="/">Terms of Service</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-12">
                                <h6 className="mb-4 fw-bold">Earn Money</h6>
                                <div className="d-flex flex-column">
                                    <a href="/">Affiliate</a>
                                    <a href="/">Become Partner</a>
                                </div>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
