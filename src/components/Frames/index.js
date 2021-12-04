import React, { useState } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import {
  FrameWrapper,
  FrameCard,
  ImageWrapper,
} from './styles';

const Frames = ({ frames, select, horizontal }) => {
  const [selectedIndex, setselectedIndex] = useState(-1);
  return (
    <FrameWrapper>
      {frames.map((frame, index) => (
        <FrameCard
          key={frame.node.relativePath}
          selectedIndex={selectedIndex}
          index={index}
          horizontal={horizontal}
          onClick={() => { select(frame); setselectedIndex(index);}}
        >
          <ImageWrapper horizontal={horizontal}>
            <GatsbyImage image={frame.node.childImageSharp.gatsbyImageData} alt="frame"/>
          </ImageWrapper>
        </FrameCard>
      ))}
    </FrameWrapper>
  );
};

export default Frames;
