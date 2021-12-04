import React, { useEffect, useRef, useState } from 'react';
import useDraggable from '../../helpers/useDraggable';
import {
  DragWrapper,
  BlockContainer,
  FullWrapper,
} from './styles';

const Block = (props) => {
  return (
    <BlockContainer {...props}>
      
    </BlockContainer>
  );
};

const Draggy = ({ color }) => {
  const {
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    blocks
  } = useDraggable({ totalBlocks: 4, blockInRow: 2 });
  return (
    <FullWrapper onMouseMove={handleMouseMove} onMouseUp={handleMouseUp}>
      {blocks.map((coordinate, index) => (
        <Block
          key={index}
          label={index}
          style={{
            transform: `translate3d(${coordinate.x}px, ${coordinate.y}px, 0px)`
          }}
          data-index={index}
          onMouseDown={handleMouseDown}
          id={`draggy-block-${index}`}
        />
      ))}
    </FullWrapper>
  );
}

export default Draggy;
