import { navigate } from 'gatsby';
import React from 'react';
import NavBar from '../NavBar';
import {
  HomePageWrapper,
  HeaderWrapper,
  TextWrapper,
  SlideOffWrapper,
} from './styles';

const HomePage = ({ data }) => (
  <HomePageWrapper>
    <NavBar />
    <HeaderWrapper>
      <TextWrapper>
        <h1>Ian Lituchy</h1>
        <h3>Web Design</h3>
        <h3 onClick={() => navigate('/photos')}>Photography</h3>
      </TextWrapper>
      <SlideOffWrapper>
        
      </SlideOffWrapper>
    </HeaderWrapper>
  </HomePageWrapper>
);

export default HomePage;
