import React from 'react';
import { graphql, StaticQuery } from 'gatsby'

import styled from 'styled-components'

import Layout from '../components/layout'
import PhotoBox from '../components/photobox'

const GalleryContainer = styled.section`
  width: 100%;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-flow: wrap row;
  justify-content: center;
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
        <PhotoBox 
          image= {data.jag}
          alt = "Fender Jaguar"
        />
      </GalleryContainer>
    </Layout>
  )}
  
  />
  )
}

 
