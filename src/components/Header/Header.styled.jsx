import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavBar = styled.header`
  display: flex;
  align-items: center;

  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #c08080;

  box-shadow: 0px 2px 5px 1px black;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  min-height: 50px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  color: black;
  font-size: xl;
  font-weight: 700;

  text-transform: uppercase;
  transform: scale(0.9);

  &:hover,
  &:focus {
    color: pink;
  }

  &.active {
    color: green;
    background-color: pink;

    padding: 6px 12px;
    border-radius: 4px;

    transform: scale(1);
    pointer-events: none;
  }
`;

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  margin-left: 10px;
`;
