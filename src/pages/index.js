import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

const Container = styled.div`
  width: 100%;
  height: 700px;
  background: linear-gradient(rgba(21,21,21,1),
  rgba(21,21,21,0.3));
  color: white;
`

const ImageHolder = styled.div`
  width: 100%;
  height: 400px;
`
const Image = styled(Img)`
  height: 100%;
  width: 100%;
  background: cover;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <Container>
        test
      </Container>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query{
    file(relativePath: { eq: "tele.png"}) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
