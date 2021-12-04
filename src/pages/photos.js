import * as React from "react";
import Photos from "../components/Photos";
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Photos data={data} />
)

export default IndexPage;

export const query = graphql`
  query {
    sunset: file(relativePath: { eq: "header-photos/sunset_2.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    pattern: file(relativePath: { eq: "header-photos/pattern.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    travel: file(relativePath: { eq: "header-photos/travel.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    building: file(relativePath: { eq: "header-photos/building.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
