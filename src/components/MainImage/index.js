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
  const fullRef = useRef();

  return (
    <PortalElementWrapper ref={fullRef} horizontal={horizontal}>
      {frame && frame.node && frame.node.childImageSharp && 
        <PortalFrameWrapper fullRef={fullRef} src={frame.node.publicURL} ref={frameRef} horizontal={horizontal} />
      }
      {image && image.node && image.node.childImageSharp &&
        <PortalImageWrapper innerMatColor={innerMatColor} mat={mat} size={frameRef.current} horizontal={horizontal}>
          <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt="frame" />
        </PortalImageWrapper>
      }
      {(mat > 0) && frame && frame.node &&
        <PortalMat
          matColor={matColor}
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
    debugger;
    setPortalElement(<PortalFrame frame={frame} image={image} horizontal={horizontal} mat={mat} matcolor={matColor} innerMatColor={innerMatColor} />)
  }, [frame, image, mat, horizontal, matColor, innerMatColor]);
  
  return (
    <FullWrapper >
      { !((frame && frame.node) || (image && image.node)) &&
        <h2>Start by selected an image or frame!</h2>
      }
      {((frame && frame.node) || (image && image.node)) && 
        <MainImageWrapper ref={fullRef} horizontal={horizontal}>
          {frame && frame.node && frame.node.childImageSharp && 
            <FrameWrapper src={frame.node.publicURL} ref={frameRef} horizontal={horizontal} />
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
