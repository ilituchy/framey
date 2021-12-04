import styled from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const ImagesWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow: scroll;
  overflow-y: visible;
  height: 145px;
  align-items: center;
  padding-left: 15px;
`;

export const ImageCard = styled.div`
  width: 190px;
  height: auto;
  margin-right: 15px;
  margin-bottom: 0;
  transition: all .2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  .gatsby-image-wrapper {
    width: 190px;
    height: 125px;
  }
`;
