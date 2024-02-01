import {Container, Navbar} from "react-bootstrap";
import logo from "../assets/react.svg";
import {
    NavLink,
    Outlet
} from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <Navbar className="mb-5" bg="dark" data-bs-theme="dark">
                <Container className="col-12 col-lg-8 mx-auto">
                    <Navbar.Brand>
                        <a href={"/"}>
                            <img
                            alt="logo"
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top me-2" />
                        </a>
                        LEXIFLASH
                    </Navbar.Brand>
                    <ul>
                        <NavLink to="/learn">Trainer</NavLink>
                        <NavLink to="/editor">Editor</NavLink>
                    </ul>
                </Container>
            </Navbar>

            <Container className="col-12 col-lg-8 mx-auto">
                <Outlet/>
            </Container>
        </>
    )
}