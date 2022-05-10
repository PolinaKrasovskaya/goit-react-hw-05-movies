import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
`;

export const Item = styled.li`
    width: 150px;
    margin-right: 20px;
    margin-top: 20px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Image = styled.img`
    width: 150px;
    height: auto;
`;

export const Name = styled.h2`
    font-size: 24px;
    font-weight: 700;
    color: #490936;
`;

export const Header = styled.span`
    font-size: 14px;
    font-weight: 600;
    color: #010501;
`;

export const Text = styled.span`
    font-size: 14px;
    font-weight: 400;
    color: #010501;
`;

