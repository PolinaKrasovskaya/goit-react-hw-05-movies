import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  margin: 20px;
  &:hover,
  &:focus,
  &.active {
    color: #tomato;
  }
`;