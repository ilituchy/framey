import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const NavBarWrapper = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  box-shadow: -1px 2px 8px 1px rgba(0,0,0,0.26);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-right: 3%;
  z-index: 990;
  ${props => props.editModal && css`
    height: 50px;
    h1 {
      font-size: 24px !important;
    }
  `};
`;

export const LogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  margin-left: -10px;
  ${props => props.editModal && css`
    width: 35px;
    height: 35px;
  `};
  .gatsby-image-wrapper {
    height: 100% !important;
    width: 100% !important;
    position: relative !important;
  }
`;

export const TitleFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    margin-right: 50px;
    color: #ff5e5b;
    margin-bottom: 0;
    margin-left: 15px;
    font-size: 32px;
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
    border: none;
    color: #3A506B;
    ${props => props.editModal && css`
      width: 130px;
      height: 30px;
    `};
    &.save {
      background-color: #00cecb;
    }
    &.cancel {
      background-color: #ff5e5b;
      &:hover {
        border: 4px solid #00cecb;
        ${props => props.editModal && css`
          border: 2px solid #00cecb;
        `}
      }
    }
    &:hover {
      border: 4px solid #ff5e5b;
      transform: scale(1.05);
      transition: transform .3s;
      transition: border .3s;
      ${props => props.editModal && css`
        border: 2px solid #ff5e5b;
        transform: none;
      `}
    }
    &:active {

    }
  }
`;
