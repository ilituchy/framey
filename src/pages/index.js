import React, { useState } from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';
import Main from "../components/Main";
import Seo from "../components/seo";

const Framer = ({ data }) => {

  return (
    <>
      <Seo title="Framey.studio" description="Frame your favorite images!" />
      <Main
        wall={data.wall.childImageSharp.gatsbyImageData}
        logo={data.logo.childImageSharp.gatsbyImageData}
        frames={data.frames.edges}
        images={data.images.edges}
      />
    </>
  );
};

export default Framer;

export const query = graphql`
  query images {
    images: allFile(filter: {relativeDirectory: {eq: "frame-photos-new"}}) {
      edges {
        node {
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 90, layout: CONSTRAINED)
          }
        }
      }
    }
    frames: allFile(filter: {relativeDirectory: {eq: "frames"}}) {
      edges {
        node {
          relativePath
          publicURL
          childImageSharp {
            gatsbyImageData(quality: 90, layout: CONSTRAINED)
          }
        }
      }
    }
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
      }
    }
    wall: file(relativePath: { eq: "wall.png" }) {
      childImageSharp {
        gatsbyImageData(quality: 90, layout: CONSTRAINED)
      }
    }
  }
`;
