import { Container, Nav, Navbar, Button } from "react-bootstrap";
//images
import Logo from '../../assests/img/Logo.png';
//style
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg">
                <Container >
                    <Navbar.Brand href="#"><img src={Logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="m-auto my-2 my-lg-0"
                            navbarScroll
                        >
                            <Nav.Link href="#action1" className="navbar-link">About</Nav.Link>
                            <Nav.Link href="#action1" className="navbar-link">Features</Nav.Link>
                            <Nav.Link href="#action2" className="navbar-link">Pricing</Nav.Link>
                            <Nav.Link href="#action2" className="navbar-link">Testimonials</Nav.Link>
                            <Nav.Link href="#action2" className="navbar-link">Help</Nav.Link>
                        </Nav>

                        <Nav.Link href="#deets" className="singup">Sign In</Nav.Link>
                        <Button className="btn-menu">Sign Up</Button>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export default Header;

