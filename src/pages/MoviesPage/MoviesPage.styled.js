import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Form = styled.form`
    margin-top: 50px;
`;

export const Input = styled.input`
    padding-left: 10px;
    padding-right: 10px;
    margin-right: 20px;
    width: 300px;
    height: 30px;
    border: 1px solid #490936;
    border-radius: 4px;
    background-color: #f5f2f4;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Button = styled.button`
    margin-top: 50px;
    padding: 0;
    width: 70px;
    height: 32px;
    border: 1px solid #490936;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    align-items: center;
    text-align: center;
    color: #490936;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.45);
    transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover {
    color: #f0e4ec;
    background-color: #490936;
    }
`;

export const List = styled.ul`
    margin-top: 50px;
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

    &:hover,
    &:focus {
        color: #9a5a87;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    }
`;