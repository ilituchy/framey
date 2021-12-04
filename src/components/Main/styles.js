import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const MainWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  .gatsby-image-wrapper{
    height: 100vh;
    width: 100vw;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
  }
`;

export const ImgWrapper = styled.div`
  width: 100%;
  width: 100%;
  height: 240px;
  background-image: url(${props => props.src});
  background-size: cover;
  height: 143%;
  background-position-x: -115px;
`;

export const DragWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 100px;
  .card {
    position: relative;
    height: auto;
    width: 450px;
    background: transparent;
    border-radius: 0.5rem;
    transform: translateX(-50%);
    z-index: 100;
    transition: box-shadow 0.5s, opacity 0.5s;
    will-change: transform;
    cursor: grab;
    touch-action: none;
  }
`;
