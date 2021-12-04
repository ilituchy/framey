import styled from 'styled-components';
import media from '../utils/styleUtils/mediaQueries';

const NavBarWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #FF5D73;
  position: fixed;
  top: 0;
  box-shadow: -1px 2px 8px 1px rgba(0,0,0,0.26);
`;

const Card = styled.div`
  background-color: white;
  background-size: auto 85%;
  background-repeat: no-repeat;
  background-position: center center;
  position: relative;
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
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0 12.5px 20px -10px rgba(50, 50, 73, 0.4), 0 10px 10px -10px rgba(50, 50, 73, 0.3);
  .text-holder {
    z-index: 10;
    background-color: rgb(255,255,255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 0px;
    box-shadow: 10px 10px 20px -10px rgba(50, 50, 73, 0.6);
    width: 160px;
    h2 {
      margin: 0;
      font-family: 'Georgia';
      font-weight: 100;
    }
  }
  .gatsby-image-wrapper {
    height: 100%;
    width: 100%;
    position: absolute !important;
  }
`;

export {
  Card,
};
