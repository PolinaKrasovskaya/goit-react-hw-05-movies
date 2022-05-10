import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const Nav = styled.nav`
    height: 50px;
    display: flex;
    gap: 20px;
    border-bottom: 1px solid #000;
`;

export const Link = styled(NavLink)`
    font-size: 20px;
    text-transform: uppercase;
    color: #010501;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 700;
    text-decoration: none;

    &:hover,
    &.active {
        color: #7b205f;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
    }
`;

export const Wrapper = styled.div`
    padding: 40px;
`;