import * as React from "react";
import HomePage from "../components/HomePage";
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <HomePage data={data} />
)

export default IndexPage;

export const query = graphql`
  query {
    test: file(relativePath: { eq: "test.png" }) {
      childImageSharp {
        fluid(quality: 80) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
