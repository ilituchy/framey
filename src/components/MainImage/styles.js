import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const MainImageWrapper = styled.div`
  width: 100%;
  height: 100%;
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

  width: 50%;
  height: 100%;
  min-width: 533px;
  min-height: 719px;
  position: relative;
  z-index: 5;
  margin-top: -80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  transform: rotate(90deg);
  ${props => !props.horizontal && css`
    transform: rotate(0);
    min-width: unset;
    min-height: unset;
    height: 550px;
    max-height: 630px;
    min-height: 630px;
    max-width: 520px;
    min-width: 520px;
    width: 462px;
    margin-top: -10px;
    ${props => props.mat > 10 && css`
      margin-left: -12px;
    `};
  `};
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const ImageWrapper = styled.div`
  top: 110px;
  height: 58%;
  width: 489px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 3;
  ${props => props.mat > 0 && `transform: scale(${(1/(props.mat/20)) > 1 ? 1 : (1/(props.mat/20))});`}
  ${props => props.innerMatColor !== 'none' && `border: 5px solid ${props.innerMatColor};`}
  ${props => !props.horizontal && css`
    height: 430px;
    width: 307px;
    top: 90px;
  `};
  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }
`;

export const Mat = styled.div`
  top: 110px;
  height: 58%;
  width: 489px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.color};
  box-shadow: 0 0 8px 1px #000 inset;
  z-index: 2;
  ${props => !props.horizontal && css`
    height: 430px;
    width: 307px;
    top: 90px;
  `};
`;

export const PortalElementWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-image: url(${props => props.src});
  background-size: cover;
  z-index: 1;
`;

export const PortalFrameWrapper = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  width: 100%;
  height: 182%;
  margin-top: -78px;
  position: relative;
  z-index: 5;
  transform: rotate(90deg);
  ${props => !props.horizontal && css`
    transform: rotate(0);
    min-width: unset;
    min-height: unset;
    height: 550px;
    max-height: 630px;
    min-height: 630px;
    max-width: 520px;
    min-width: 520px;
    width: 462px;
    margin-top: -10px;
    ${props => props.mat > 10 && css`
      margin-left: -12px;
    `};
  `};
`;

export const PortalImageWrapper = styled.div`
  top: 110px;
  height: 58%;
  width: 489px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 3;
  background-image: url(${props => props.src});
  background-size: cover;
  ${props => props.mat > 0 && `transform: scale(${(1/(props.mat/20)) > 1 ? 1 : (1/(props.mat/20))});`}
  ${props => props.innerMatColor !== 'none' && `border: 5px solid ${props.innerMatColor};`}
  ${props => !props.horizontal && css`
    height: 430px;
    width: 307px;
    top: 90px;
  `};
`;

export const PortalMat = styled.div`
  top: 110px;
  height: 58%;
  width: 489px;
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: ${props => props.color};
  box-shadow: 0 0 8px 1px #000 inset;
  z-index: 2;
  ${props => !props.horizontal && css`
    height: 430px;
    width: 307px;
    top: 90px;
  `};
`;