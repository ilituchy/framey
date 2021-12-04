import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const FramerWrapper = styled.div`
  margin: 0 auto;
  overflow: hidden;
  height: 88vh;
  position: absolute;
  z-index: 990;
  top: 80px;
  left: 0;
  width: 100%;
  @media(max-width: 1100px) {
    display: none;
  }
`;

export const Disclaimer = styled.div`
  display: block;
  width: 100%;
  font-size: 40px;
  line-height: 50px;
  margin-top: 100px;
  text-align: center;
  @media(min-width: 1100px) {
    display: none;
  }
`;

export const HeaderWrapper = styled.div`
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

export const TextWrapper = styled.div`
  color: #494949;
  margin-top: 30px;
  padding-left: 40px;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
  padding-right: 2%;
  h2 {
    margin-left: 30px;
    color: #ff5e5b;
  }
  h3 {
    margin: 0;
    margin-bottom: 10px;
    color: #7C7A7A;
    cursor: pointer;
    margin-right: 50px;
    &:hover {
      color: lightgray;
      transform: scale(1.01);
      transition-duration: 500ms;
    }
  }
  h1 {
    margin-right: 50px;
    color: #ff5e5b;
    margin-bottom: 0;
    margin-left: 15px;
  }
`;

export const LogoWrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-left: -10px;
`;

export const TitleFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainFlexWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 5px;
  width: 95vw;
  display: flex;
  justify-content: flex-start;
  position: relative;
  box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
  border-radius: 5px;
  overflow: hidden;
`;

export const ImagesFlex = styled.div`
  width: 65%;
  height: 100%;
  margin-left: 2%;
`;

export const FrameFlex = styled.div`
  width: 33%;
  height: 100%;
  margin-left: 0%;
`;

export const ControlsWrapper = styled.div`
  width: 100%;
  height: 450px;
  overflow: scroll;
  border: 1px solid #D9D9D9;
  padding: 25px;
  background: white;
  border-radius: 5px;
  h2 {
    color: #ff5e5b;
  }
`;

export const PlusWrapper = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 3px solid #ff5e5b;
  font-size: 22px;
  line-height: 22px;
  display: inline-block;
  cursor: pointer;
  p {
    width: 100%;
    margin: 0;
    font-size: 22px;
    line-height: 22px;
    text-align: center;
  }
  margin-left: 10px;
`;

export const DirectionWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Direction = styled.div`
  width: 230px;
  height: 60px;
  background: #f3f0f1;
  position: relative;
  background: #f3f0f1;
  margin-bottom: 25px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  cursor: pointer;
  span {
    line-height: 32px;
    font-family: "Montserrat", sans-serif;
    font-size: 32px;
    font-weight: semibold;
  }
  box-shadow: -6px -6px 10px rgba(255, 255, 255, 0.8),
    6px 6px 10px rgba(0, 0, 0, 0.2);
  color: #ff5e5b;
  &:hover {
    transform: scale(1.02);
  }
  ${props => (props.horizontal === props.trueHorizontal) && css`
    opacity: 1;
    box-shadow: inset -4px -4px 8px rgba(255, 255, 255, 0.5),
      inset 8px 8px 16px rgba(0, 0, 0, 0.1);
    color: #00cecb;
  `};
`;

export const ButtonsWrapper = styled.div`
  margin-bottom: 20px;
  margin-left: 15px;
  margin-top: 40px;
  button {
    height: 50px;
    width: 120px;
    background: linear-gradient(to bottom, #ff5e5b, #00cecb);
    font-weight: bold;
    color: #ffffea;
    font-size: 1.2rem;
    border: none;
    margin: -5px; 
    padding: 0;
    stroke: black;
    outline: none;
  }
  .first {
    border-radius: 20px 0 0 20px;
  }
  .second {
    border-left: 1px solid #ffffea;
  }
  .third {
    border-radius: 0 20px 20px 0;
    border-left: 1px solid #ffffea;
  }
  button:hover{
    cursor: pointer;
    filter: drop-shadow(3px 5px 5px rgba(0, 0, 0, 0.45));
  }
  button:active{
    filter: none;
    transform: scale(.95);
  }
`;

export const MatWrapper = styled.div`
  margin-top: 20px;
  h2 {
    margin-bottom: 10px;
  }
  .slider {
    -webkit-appearance: none;
    width: 74%;
    height: 10px;
    background: #ffffea;
    outline: none;
    border: 3px solid #ff5e5b;
    border-radius: 8px;
  }

  /* for chrome/safari */
  .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 14px;
    height: 36px;
    background: #ffffea;
    cursor: pointer;
    border: 3px solid #ff5e5b;
    border-radius: 4px;
  }

  /* for firefox */
  .slider::-moz-range-thumb {
    width: 14px;
    height: 36px;
    background: #ffffea;
    cursor: pointer;
    border: 3px solid #ff5e5b;
    border-radius: 4px;
  }
`;

export const ColorsWrapper = styled.div`
  width: 100%;
  margin-top: 20px;
`;

export const ColorCard = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;
  position: relative;
  background: ${props => props.color};
  cursor: pointer;
  margin-bottom: 35px;
  h6 {
    font-size: 11px;
    line-height: 12px;
    width: 100%;
    text-align: center;
    bottom: -10px;
    margin-top: 42px;
    font-weight: 400;
  }
`;

export const MainColors = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  p {
    width: 100%;
    min-width: 100%;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 7px;
    margin-top: 10px;
  }
`;

export const SecondaryColors = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  margin-top: 10px;
  p {
    width: 100%;
    min-width: 100%;
    font-size: 15px;
    line-height: 18px;
    margin-bottom: 7px;
    margin-top: 10px;
  }
`;

export const Close = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    margin-right: 10px;
    width: 150px;
    height: 50px;
    cursor: pointer;
    &.save {
      background-color: #00cecb;
    }
    &.cancel {
      background-color: #ff5e5b;
    }
    &:hover {
      border: 1px solid #ffffea;
    }
    &:active {
      box-shadow: inset -3px -3px 0px rgba(0, 0, 0, 1),
      inset 3px 3px 0px rgba(0, 0, 0, 1);
    }
  }
`;
