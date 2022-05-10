import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 50px;
  padding: 0;
  width: 70px;
  height: 25px;
  border: 1px solid #490936;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  align-items: center;
  text-align: center;
  color: #490936;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);

  &:hover {
    color: #f0e4ec;
    background-color: #490936;
  }
`;

export const Article = styled.article`
    display: flex;
`;

export const Image = styled.img`
    margin-top: 20px;
    max-width: 300px;
    height: fit-content;
`;

export const Description = styled.div`
    margin-left: 20px;
`;

export const ItemTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  color: #490936;
`;

export const Header = styled.h3`
  font-size: 20px;
  font-weight: 700;
  color: #490936;
`;

export const Text = styled.span`
  font-size: 14px;
  font-weight: 400;
  color: #010501;
`;

export const TextGenres = styled.span`
  margin: 0;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #010501;
`;

export const Navigation = styled.span`
  margin-top: 25px;
  display: block;
`;

export const Additional = styled.h3`
  font-size: 16px;
  font-weight: 700;
  color: #490936;
`;

export const Link = styled(NavLink)`
  margin-right: 20px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 18px;
  font-weight: 700; 
  color: #010501;;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  &:hover,
  &.active {
    color: #7b205f;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.55);
  }
`;