import styled from 'styled-components';
import media from '../utils/styleUtils/mediaQueries';

const HomePageWrapper = styled.div`
  margin: 0 auto;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  width: 100%;
  height: 2000px;
  background-color: white;
  padding: 40px;
  position: relative;
  ${media.desktop`
    display: flex;
    max-width: 1110px;
  `}
  .higher-div {
    position: absolute;
    width: 300px;
    height: 300px;
    will-change: transform;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }
  .inner-div {
    background-color: white;
    background-size: auto 85%;
    background-repeat: no-repeat;
    background-position: center center;
    cursor: pointer;
    width: 300px;
    max-width: 300px;
    height: 85vh;
    max-height: 300px;
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 12.5px 50px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  }
`;

const TextWrapper = styled.div`
  color: #494949;
  margin-top: 30px;
  ${media.desktop`
    width: 50%;
  `}
  h3 {
    margin: 0;
    margin-bottom: 10px;
    color: #7C7A7A;
    cursor: pointer;
    &:hover {
      color: lightgray;
      transform: scale(1.01);
      transition-duration: 500ms;
    }
  }
`;

const SlideOffWrapper = styled.div`
  ${media.desktop`
    width: 50%;
  `}
`;

export {
  HomePageWrapper,
  HeaderWrapper,
  TextWrapper,
  SlideOffWrapper,
};
