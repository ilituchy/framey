import React, { useEffect, useRef } from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import html2canvas from 'html2canvas';
import {
  MainImageWrapper,
  FrameWrapper,
  ImageWrapper,
  Mat,
  FullWrapper,
  PortalElementWrapper,
  PortalFrameWrapper,
  PortalImageWrapper,
  PortalMat,
} from './styles';

const PortalFrame = ({ frame, image, horizontal, mat, matColor, innerMatColor }) => {
  const frameRef = useRef();
  return (
    <PortalElementWrapper>
      {frame && frame.node && frame.node.childImageSharp && 
        <PortalFrameWrapper ref={frameRef} horizontal={horizontal} src={frame.node.publicURL} />
      }
      {image && image.node && image.node.childImageSharp &&
        <PortalImageWrapper src={image.node.publicURL} innerMatColor={innerMatColor} mat={mat} size={frameRef.current} horizontal={horizontal} />
      }
      {(mat > 0) && frame && frame.node &&
        <PortalMat
          color={matColor}
          mat={mat}
          horizontal={horizontal}
        />
      }
    </PortalElementWrapper>
  );
};

const MainImage = ({ frame, image, horizontal, mat, matColor, innerMatColor, setPortalElement }) => {
  const frameRef = useRef();
  const fullRef = useRef();
  
  // Send the info for the element back to the higher level
  useEffect(() => {
    setPortalElement(<PortalFrame frame={frame} image={image} horizontal={horizontal} mat={mat} matcolor={matColor} innerMatColor={innerMatColor} />)
  }, [frame, image, mat, horizontal, matColor, innerMatColor]);
  
  return (
    <FullWrapper >
      { !((frame && frame.node) || (image && image.node)) &&
        <h2>Start by selected an image or frame!</h2>
      }
      {((frame && frame.node) || (image && image.node)) && 
        <MainImageWrapper ref={fullRef}>
          {frame && frame.node && frame.node.childImageSharp && 
            <FrameWrapper ref={frameRef} horizontal={horizontal}>
              <GatsbyImage image={frame.node.childImageSharp.gatsbyImageData} alt="frame" />
            </FrameWrapper>
          }
          {image && image.node && image.node.childImageSharp &&
            <ImageWrapper innerMatColor={innerMatColor} mat={mat} size={frameRef.current} horizontal={horizontal}>
              <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt="frame" />
            </ImageWrapper>
          }
          {(mat > 0) && frame && frame.node &&
            <Mat
              color={matColor}
              mat={mat}
              horizontal={horizontal}
            />
          }
        </MainImageWrapper>
      }
    </FullWrapper>
  );
};

export default MainImage;
