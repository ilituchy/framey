import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const IntroWrapper = styled.div`
  width: 800px;
  margin: auto auto;
  height: 300px;
  margin-top: 200px;
  padding-left: 15px;
  ${props => !props.show && css`
    height: 0;
    width: 0;
  `};
  .drop-text {
    display: flex;
    align-items: center;
  }
  h1 {
    margin-right: 15px;
    text-align: center;
    font-size: 64px;
    line-height: 70px;
    color: #3A506B;
    text-shadow: 4px 4px 4px rgb(0, 0, 0, 0.1);
    &.Framey {
      margin: 0;
    }
    &..studio {
      margin: 0;
    }
  }
  .subheader {
    margin-top: 0px;
    text-align: center;
    font-size: 40px;
    line-height: 42px;
    color: #ff5e5b;
    height: 0;
    overflow: hidden;
    text-shadow: 4px 4px 4px rgb(0, 0, 0, 0.1);
  }
  .buttonWrapper {
    width: 150px;
    margin: 0 auto;
    margin-top: 25px;
    .button {
      width: 150px;
      height: 40px;
      position: relative;
      cursor: pointer;
      overflow: hidden;
      box-shadow: 4px 4px 4px rgb(0, 0, 0, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        transform: scale(1.05);
        transition-duration: 1000ms;
      }
      .fill {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #00cecb;
        z-index: -1;
      }
      text {
        color: #3A506B;
        font-size: 12px;
        margin: 0;
        line-height: 12px;
      }
    }
  }
`;
