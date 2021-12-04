import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const FrameWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  border: 1px solid #D9D9D9;
  overflow: scroll;
  margin-bottom: 15px;
  padding-top: 20px;
  background: white;
  border-radius: 5px;
  ${props => !props.horizontal && css`
    padding-left: 30px;
    padding-right: 30px;
  `};
`;

export const FrameCard = styled.div`
  width: 90px;
  height: 95px;
  margin-right: 20px;
  padding: 5px;
  transition: all .2s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  ${props => props.index === props.selectedIndex && css`
    border: 1px solid #00cecb;
    transform: scale(1.05);
  `};
  &:hover {
    transform: scale(1.05);
  }
`

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  .gatsby-image-wrapper {
    height: 200%;
    width: 200%;
    margin-left: -24px;
  }  
`;