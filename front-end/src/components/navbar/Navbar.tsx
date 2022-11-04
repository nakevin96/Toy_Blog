import React from 'react';
import styled from 'styled-components';
import { ReactComponent as MenuIcon } from '../../assets/svgs/menu.svg';

const Nav = styled.nav`
  width: 100%;
  height: 3.2rem;
  border-top: 0.5rem solid;
  padding-bottom: 0.2rem;
  border-bottom: 0.1rem solid #a9a9a9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 2em;
  font-weight: bold;
`;

const Span = styled.span`
  flex: 8;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconSpan = styled.span`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navbar = () => (
  <Nav>
    <IconSpan>
      <MenuIcon />
    </IconSpan>
    <Span>Welcome to ToyBlog</Span>
  </Nav>
);

export default Navbar;
