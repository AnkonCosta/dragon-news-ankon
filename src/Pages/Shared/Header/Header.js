import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

function Header() {

    const { user, logOut } = useContext(AuthContext)

    return (
        <div>
            <Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand ><Link to='/'>Dragon News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link >
                                {
                                    user?.uid ?
                                        <>
                                            <Button className='text-black fw-semibold text-decoration-none' onClick={logOut} variant="outline-success">Log Out</Button>
                                            <Button className='text-primary fw-semibold text-decoration-none' variant="link">{user?.displayName}</Button>
                                            {/* <span>{user?.displayName}</span> */}


                                        </>
                                        :
                                        <>

                                            <Button className='  mx-2' variant="outline-success"> <Link className='text-black fw-semibold text-decoration-none' to='/login'>Login</Link></Button>
                                            <Button className='mx-2' variant="outline-success"><Link className='text-black fw-semibold text-decoration-none' to='/register'>Register</Link></Button>

                                        </>
                                }
                            </Nav.Link>
                            <Link to='/profile' className='d-flex align-items-center' >
                                {
                                    user?.photoURL ?
                                        <Image roundedCircle
                                            style={{ height: '35px', }}
                                            src={user?.photoURL}
                                        ></Image>
                                        :
                                        <FaUser style={{ width: '30px', height: '30px', border: 'solid blue 2px', borderRadius: '50%' }}></FaUser>
                                }
                            </Link>
                        </Nav>
                        <div className='d-lg-none'>
                            <LeftSideNav></LeftSideNav>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;