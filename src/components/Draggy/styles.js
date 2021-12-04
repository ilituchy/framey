import styled, { css } from 'styled-components/macro';
import media from '../utils/styleUtils/mediaQueries';

export const BlockContainer = styled.div`
  position: absolute;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 360px;
  height: 240px;
  min-width: 360px;
  max-height: 240px;
  max-width: 360px;
  min-height: 240px;
  flex-shrink: 0;
  margin-bottom: 8px;
  margin-right: 8px;
  border: 1px solid black;
  cursor: grab;
  overflow: hidden;
  z-index: 10;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
`;

export const FullWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  margin: 0 auto;
  margin-top: 200px;
`;

export const DragWrapper = styled.div`
  height: auto;
  width: auto;
  position: fixed;
  left: 50%;
  bottom: 3%;
  z-index: 1000;
`;
