import React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Headlines from '../components/headlines'
import MinorHeadline from "../components/minorHeadline";
import SmallAbout from '../components/smallAbout'
import SmallContact from "../components/smallForm";


const Container = styled.div`
  width: 100%;
  background: linear-gradient(rgba(21,21,21,1),
  rgba(21,21,21,0.3));
  color: white;
`
const MinorContainer = styled.section`
  margin-top: 125px;
  width: 100%;
  display: flex; 
  flex-flow: wrap row;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 100px;

  @media(max-width: 800px) {
    flex-flow: wrap column;
    margin-top: 10px;
    margin-botton: 10px;
  }
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
const TextHolder = styled.section`
  width: 100%;
  margin-top: 50px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
  align-content: center;

  @media(max-width: 800px) {
    margin-top: 5px;
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`South Sound Guitar Repair`, `Tacoma Wa`, `Guitar Repair Tacoma Washington`, `Vintage Guitar Repair`, `Jeff Hoppe`,`Bass Repair`,`Bass Repair Tacoma`]} />
      <Container>
        <ImageHolder>
          <Image
          fluid={data.file.childImageSharp.fluid}
          />
        </ImageHolder>
        <TextHolder>
          <Headlines title = "south sound guitar repair"/>
          <Headlines title="Full Service guitar and bass repair"/>
          <MinorHeadline title="Tacoma Washinton" />
        </TextHolder>
      </Container>
      <MinorContainer>
        <SmallAbout/>
        <SmallContact/>
      </MinorContainer>
      
  </Layout>
)

export default IndexPage

export const query = graphql`
query{
  file(relativePath: { eq: "tele.png"}) {
    childImageSharp {
      fluid(maxWidth: 1400){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`
