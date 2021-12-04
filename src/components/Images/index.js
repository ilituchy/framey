import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import {
  ImagesWrapper,
  ImageCard,
} from './styles';

const Images = ({ images, select }) => {
  return (
    <ImagesWrapper>
      {images.map(image => (
        <ImageCard onClick={() => select(image)} key={image.node.relativePath}>
          <GatsbyImage image={image.node.childImageSharp.gatsbyImageData} alt="image"/>
        </ImageCard>
      ))}
    </ImagesWrapper>
  );
};

export default Images;
