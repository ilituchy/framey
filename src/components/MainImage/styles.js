import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const MainImageWrapper = styled.div`
  width: 490px;
  height: 643px;
  ${props => props.horizontal && css`
    height: 490px;
    width: 643px;
  `}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FullWrapper = styled.div`
  width: 100%;
  border: 1px solid #D9D9D9;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  h2 {
    font-size: 40px;
    line-height: 44px;
    text-align: center;
    width: 100%;
  }
`;

export const FrameWrapper = styled.div`
  width: 490px;
  height: 643px;
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transform: rotate(90deg);
  margin-top: -77px;
  background-image: url(${props => props.src});
  background-size: contain;
  ${props => !props.horizontal && css`
    transform: rotate(0);
    margin-top: -30px;
    height: 515px;
    width: 393px;
    ${props => props.mat > 10 && css`
      margin-left: -12px;
    `};
  `};
`;

export const ImageWrapper = styled.div`
  height: 97%;
  width: 97%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 3;
  ${props => props.mat > 0 && `transform: scale(${(1/(props.mat/20)) > 1 ? 1 : (1/(props.mat/20))});`}
  ${props => props.innerMatColor !== 'none' && `border: 5px solid ${props.innerMatColor};`}
  ${props => !props.horizontal && css`
    height: 76%;
    width: 75%;
    top: 64px;
  `};
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Mat = styled.div`
  height: 97%;
  width: 97%;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.color};
  box-shadow: 0 0 8px 1px #000 inset;
  z-index: 2;
  ${props => !props.horizontal && css`
    height: 76%;
    width: 75%;
    top: 64px;
  `};
`;

export const PortalElementWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const PortalFrameWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-repeat: no-repeat;
  z-index: 5;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-image: url(${props => props.src});
  background-size: cover;
`;

export const PortalImageWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 3;
  background-image: url(${props => props.src});
  background-size: cover;
  ${props => props.horizontal ? css`
    height: 62%;
    width: 115%;
    transform: rotate(-90deg) ${props => props.mat > 0 && `scale(${(1/(props.mat/20)) > 1 ? 1 : (1/(props.mat/20))})`};`
  : css`
    height: 86%;
    width: 90%;
    ${props.mat > 0 && `transform: scale(${(1/(props.mat/20)) > 1 ? 1 : (1/(props.mat/20))});`}
  `}
  ${props => props.innerMatColor !== 'none' && `border: 5px solid ${props.innerMatColor};`}
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const PortalMat = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.matColor ? props.matColor : 'white'};
  box-shadow: 0 0 8px 1px #000 inset;
  z-index: 2;
  ${props => props.horizontal ? css`
    height: 72%;
    width: 126%;
    transform: rotate(-90deg);`
  : css`
    height: 86%;
    width: 90%;
  `}
`;