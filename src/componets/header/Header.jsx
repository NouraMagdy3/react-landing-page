import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import './Header.css'
import Logo from '../../assets/Logo.png'
import { Button } from "bootstrap";
const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Brand href="#"><img src={Logo} /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className="link">About</Nav.Link>
                            <Nav.Link href="#action2" className="link">Pricing</Nav.Link>
                            <Nav.Link href="#action2" className="link">Testimonials</Nav.Link>
                            <Nav.Link href="#action2" className="link">Help</Nav.Link>
                        </Nav>

                        <Nav.Link href="#deets" className="singup">Sign In</Nav.Link>
                        <button className="btn-menu ">Sign Up</button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export default Header;

