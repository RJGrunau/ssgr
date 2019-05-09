import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'


const GalleryContainer = styled.section`
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  padding: 20px;
  display: flex;
  flex-flow: wrap row;
`
const GalleryImageHolder = styled.figure`
  width: 25%;
  height: 500px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px rgba(118,118,118,0.3);
  z-index: 99;
`

const GalleryImage = styled(Img)`
  width: 100%;
  height: 100%;
  background: cover;
  border-radius: 5px;
`


export default () => {
  return(
  <StaticQuery query={graphql`
    {
      doubleO18: file(relativePath: { eq: "0018.png"}) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    },
    {
      L00: file(relativePath: { eq: "L00.png"}) {
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
        <GalleryImageHolder
          key={data.file}
        >
          <GalleryImage
            fluid = {data.doubleO18.childImageSharp.fluid}
          />
        </GalleryImageHolder>
      </GalleryContainer>
    </Layout>
  )}
  
  />
  )
}

 
