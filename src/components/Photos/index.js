import React from 'react';
import NavBar from '../NavBar';
import Cards from '../Cards';
import {
  PhotoWrapper,
  HeaderWrapper,
  TextWrapper,
  SlideOffWrapper,
} from './styles';

const HomePage = ({ data }) => (
  <PhotoWrapper>
    <NavBar />
    <HeaderWrapper>
      <TextWrapper>
        <h1>Slide Through Categories</h1>
      </TextWrapper>
      <SlideOffWrapper>
        <Cards data={data}/>
      </SlideOffWrapper>
    </HeaderWrapper>
  </PhotoWrapper>
);

export default HomePage;
