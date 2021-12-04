import { css } from 'styled-components';

export const sizes = {
  smallMobile: -374,
  mobile: 375,
  largeMobile: 500,
  tablet: 768,
  largeTablet: 1024,
  desktop: 1280,
  mediumDesktop: 1450,
  largeDesktop: 1600,
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
