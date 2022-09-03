import { Link } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar bg="dark" expand="lg">
            <Container>
                <Navbar.Brand><Link to="/" className="link">Page Animations</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Nav className="me-auto">
                    <Nav.Link><Link className="link" to="/">Home</Link></Nav.Link>
                    <Nav.Link><Link className="link" to="/about">About</Link></Nav.Link>
                    <Nav.Link><Link className="link" to="/contact-us">Contact</Link></Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar