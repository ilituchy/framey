import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
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
  cursor: grab;
  overflow: hidden;
  z-index: 10;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.4);
`;
