import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 221px;
  height: 290px;
  flex-shrink: 0;
  margin-bottom: 8px;
  margin-right: 8px;
  cursor: grab;
  overflow: hidden;
  z-index: 10;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
  ${props => props.horizontal && 'transform: rotate(90deg);'}
`;
