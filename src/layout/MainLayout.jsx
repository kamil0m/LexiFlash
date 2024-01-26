import {Container, Navbar} from "react-bootstrap";
import logo from "../assets/react.svg";
import {
    Link,
    Outlet
} from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <Navbar className="mb-5" bg="dark" data-bs-theme="dark">
                <Container className="col-12 col-lg-8 mx-auto">
                    <Navbar.Brand>
                        <img
                            alt="logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2"
                        />
                        Dashboard
                    </Navbar.Brand>
                    <ul>
                        <li><Link to="/">List</Link></li>
                        <li><Link to="/learn">Trainer</Link></li>
                        <li><Link to="/test">Test</Link></li>
                    </ul>
                </Container>
            </Navbar>

            <Container className="col-12 col-lg-8 mx-auto">
                <Outlet/>
            </Container>
        </>
    )
}