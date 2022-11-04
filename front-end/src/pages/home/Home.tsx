import React from 'react';
import styled from 'styled-components';
import { Navbar } from '../../components/navbar';

const HomeDiv = styled.div`
  min-height: 100vh;
`;

const Home = () => (
  <HomeDiv>
    <Navbar />
  </HomeDiv>
);

export default Home;
