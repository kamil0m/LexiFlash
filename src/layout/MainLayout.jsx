import {Container, Navbar} from "react-bootstrap";
import {
    NavLink,
    Outlet
} from 'react-router-dom';

export default function MainLayout() {
    return (
        <>
            <Navbar className="header">
                <Container className="col-12 col-lg-8 mx-auto nav">
                    <Navbar.Brand>
                        <NavLink to="/" className="logo" />
                    </Navbar.Brand>
                    <ul className="navbar__links">
                        <NavLink className="navbar__element" to="/learn">play</NavLink>
                        <NavLink className="navbar__element" to="/editor">edit</NavLink>
                    </ul>
                </Container>
            </Navbar>

            <Container className="col-12 col-lg-8 mx-auto main__container">
                <Outlet/>
            </Container>
        </>
    )
}