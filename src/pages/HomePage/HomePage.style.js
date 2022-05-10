import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.h1`
    font-size: 34px;
    text-transform: uppercase;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    line-height: 1.71;
    letter-spacing: 0.03em;
    font-weight: 900;
    color: #490936;
`;

export const List = styled.ul`
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    line-height: 1.6;
`;

export const Link = styled(NavLink)`
    color: #010501;
    font-weight: 700;
    text-decoration: none;

    &:hover {
        color: #9a5a87;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
`;