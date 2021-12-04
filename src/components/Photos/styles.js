import styled from 'styled-components';
import media from '../utils/styleUtils/mediaQueries';

const PhotoWrapper = styled.div`
  margin: 0 auto;
  height: auto;
  position: relative;
  overflow: hidden;
`;

const HeaderWrapper = styled.div`
  margin: 0 auto;
  margin-top: 60px;
  width: 100%;
  height: auto;
  background-color: white;
  padding: 40px;
  position: relative;
  ${media.desktop`
    display: flex;
    flex-wrap: wrap;
    max-width: 1110px;
  `}
  .higher-div {
    position: absolute;
    width: 240px;
    height: 240px;
    max-width: 240px;
    ${media.desktop`
      width: 300px;
      max-width: 300px;
      max-height: 300px;
    `}
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
    width: 240px;
    height: 240px;
    max-width: 240px;
    ${media.desktop`
      width: 300px;
      max-width: 300px;
      max-height: 300px;
    `}
    will-change: transform;
    border-radius: 10px;
    box-shadow: 0 12.5px 50px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  }
`;

const TextWrapper = styled.div`
  color: #494949;
  height: auto;
  width: 100%;
  text-align: center;
  ${media.desktop`
    width: 100%;
    margin-bottom: 50px;
  `}
  h3 {
    margin: 0;
    margin-bottom: 10px;
    color: #7C7A7A;
  }
`;

const SlideOffWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
  ${media.desktop`
    width: 100%;
  `}
`;

export {
  PhotoWrapper,
  HeaderWrapper,
  TextWrapper,
  SlideOffWrapper,
};
