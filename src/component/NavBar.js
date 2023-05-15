import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
        <>
            <Navbar style={{ width: '100%'}}   bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >Movies List</Navbar.Brand>
                    <Nav className="me-auto">
                 
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}
export default NavBar;