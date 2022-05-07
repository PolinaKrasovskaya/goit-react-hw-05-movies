import styled from 'styled-components';
import { Outlet, NavLink } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Nav = styled.nav`
    display: flex;
    gap: 20px;
`;

const Link = styled(NavLink)`
    &.active {
        color: tomato;
    }
`;

const Wrapper = styled.div`
    padding: 40px;
`;

export const Layout = () => {
    return (
        <Wrapper>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
            <Outlet />
            <Toaster />
        </Wrapper>
    )
}