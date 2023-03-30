import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = (props) => {
    return (
        <Navbar expand="lg" bg="dark" variant="dark" className='py-3'>
            <Container>
                <Navbar.Brand href="#">{props.footerbrand}</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    {props.copyright}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Footer;