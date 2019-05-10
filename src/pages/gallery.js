import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import { SocialIcon} from 'react-social-icons'

import styled from 'styled-components'

import Layout from '../components/layout'
import PhotoBox from '../components/photobox'
import Graphs from '../components/pargagraphs'

const GalleryContainer = styled.section`
  width: 100%;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
`
const Divider = styled.div`
  width: 100%;
  padding: 20px;
  margin: 10px;
  color: #f3f3f3;
  text-align: center;
`

export default () => {
  return(
  <StaticQuery query={graphql` 
    {
      doubleO18: file(relativePath: {eq: "0018.png"}){
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      L00: file(relativePath: {eq: "L00.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gretsch: file(relativePath: {eq: "gretch.png"}){
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      jag: file(relativePath: {eq: "jag.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      reso: file(relativePath: {eq: "respickup.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gibsonl1: file(relativePath: {eq: "L1.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    } 
  `}render={(data) => (
    <Layout>
      <GalleryContainer>
        <PhotoBox
          image = {data.doubleO18}
          alt = "martin OO-18"
        />
        <PhotoBox
          image = {data.L00}
          alt = "Gibson L00"
        />
        <PhotoBox
          image = {data.gretsch}
          alt = "Gretsch Guitar"
        />
        <Divider>
          <Graphs
            text = "see more on out instagram"
          />
          <SocialIcon
            url="https://instagram.com/southsoundguitars"
          />
        </Divider>
        <PhotoBox 
          image= {data.jag}
          alt = "Fender Jaguar"
        />
        <PhotoBox
          image={data.reso}
          alt="resonator guitar with pickup installed"
        />
        <PhotoBox
          image={data.gibsonl1}
          alt ="Gibson L1"
        />
      </GalleryContainer>
    </Layout>
  )}
  
  />
  )
}

 
